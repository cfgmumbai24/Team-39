import 'package:charts_flutter/flutter.dart' as charts;
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app/model/goat_data.dart';
import 'package:flutter_app/form_screen.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<charts.Series<GoatData, String>>? _seriesBarData;
  List<GoatData>? myData;

  _generateData(List<GoatData>? data) {
    _seriesBarData = [];
    if (data != null && data.isNotEmpty) {
      _seriesBarData!.add(
        charts.Series<GoatData, String>(
          domainFn: (GoatData goatData, _) => goatData.id,
          measureFn: (GoatData goatData, _) => goatData.bmi,
          colorFn: (GoatData goatData, _) => charts.Color.fromHex(code: goatData.color),
          id: 'GoatData',
          data: data,
          labelAccessorFn: (GoatData row, _) => "${row.id}",
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Dashboard')),
      body: _buildBody(context),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () async {
          final result = await Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => FormScreen()),
          );
          if (result == true) {
            setState(() {});
          }
        },
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    return StreamBuilder<QuerySnapshot>(
      stream: FirebaseFirestore.instance.collection('goat_data').snapshots(),
      builder: (context, snapshot) {
        if (!snapshot.hasData) {
          return Center(child: CircularProgressIndicator());
        } else if (snapshot.hasError) {
          return Center(child: Text('Error: ${snapshot.error}'));
        } else {
          List<GoatData> goatData = snapshot.data!.docs.map((doc) {
            return GoatData.fromMap(doc.data() as Map<String, dynamic>);
          }).toList();
          myData = goatData;
          _generateData(myData);
          return _buildChart(context, goatData);
        }
      },
    );
  }

  Widget _buildChart(BuildContext context, List<GoatData> goatData) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: Column(
        children: [
          Text(
            'Goat BMI',
            style: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 10.0),
          Expanded(
            child: charts.BarChart(
              _seriesBarData!,
              animate: true,
              animationDuration: Duration(seconds: 5),
              behaviors: [
                charts.DatumLegend(
                  entryTextStyle: charts.TextStyleSpec(
                    color: charts.MaterialPalette.purple.shadeDefault,
                    fontFamily: 'Georgia',
                    fontSize: 18,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
