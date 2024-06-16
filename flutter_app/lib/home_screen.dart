import 'package:charts_flutter/flutter.dart' as charts;
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_app/model/goat_data.dart';
import 'package:flutter_app/form_screen.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<charts.Series<GoatData, String>>? _seriesBarData;
  List<charts.Series<GoatData, String>>? _seriesWeightData;
  List<GoatData>? myData;

  _generateData(List<GoatData>? data) {
    _seriesBarData = [];
    _seriesWeightData = [];

    // Define custom colors for the bars
    final customColors = [
      charts.MaterialPalette.red.shadeDefault,
      charts.MaterialPalette.blue.shadeDefault,
      charts.MaterialPalette.green.shadeDefault,
      charts.MaterialPalette.yellow.shadeDefault,
      charts.MaterialPalette.purple.shadeDefault,
      charts.MaterialPalette.cyan.shadeDefault,
    ];

    if (data != null && data.isNotEmpty) {
      _seriesBarData!.add(
        charts.Series<GoatData, String>(
          domainFn: (GoatData goatData, int? index) => (index! + 1).toString(),
          measureFn: (GoatData goatData, _) => goatData.bmi,
          colorFn: (GoatData goatData, int? index) => customColors[index! % customColors.length],
          id: 'Goat BMI Data',
          data: data,
          labelAccessorFn: (GoatData row, int? index) => (index! + 1).toString(),
        ),
      );

      _seriesWeightData!.add(
        charts.Series<GoatData, String>(
          domainFn: (GoatData goatData, int? index) => (index! + 1).toString(),
          measureFn: (GoatData goatData, _) => goatData.weight,
          colorFn: (GoatData goatData, int? index) => customColors[index! % customColors.length],
          id: 'Goat Weight Data',
          data: data,
          labelAccessorFn: (GoatData row, int? index) => (index! + 1).toString(),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          'Dashboard',
          style: TextStyle(
            fontSize: 40.0,
            fontWeight: FontWeight.bold,
            fontFamily: 'BeautifulFont', // Replace with a beautiful font
          ),
        ),
      ),
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
          return _buildCharts(context, goatData);
        }
      },
    );
  }

  Widget _buildCharts(BuildContext context, List<GoatData> goatData) {
    return SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.all(8.0),
        child: Column(
          children: [
            Text(
              'BMI Record Graph',
              style: TextStyle(fontSize: 30.0),
            ),
            SizedBox(height: 10.0),
            Container(
              height: MediaQuery.of(context).size.height * 0.4, // Adjust the height to decrease the size of the first chart
              child: charts.BarChart(
                _seriesBarData!,
                animate: true,
                animationDuration: Duration(seconds: 5),
                barGroupingType: charts.BarGroupingType.grouped,
                behaviors: [
                  charts.DatumLegend(
                    entryTextStyle: charts.TextStyleSpec(
                      color: charts.MaterialPalette.purple.shadeDefault,
                      fontFamily: 'Georgia',
                      fontSize: 18,
                    ),
                  ),
                ],
                defaultRenderer: charts.BarRendererConfig(
                  groupingType: charts.BarGroupingType.grouped,
                  barRendererDecorator: charts.BarLabelDecorator<String>(),
                  maxBarWidthPx: 20, // Adjust this value to decrease bar width
                ),
              ),
            ),
            SizedBox(height: 35.0), // Add some spacing between the charts
            Text(
              'Weight Record Graph',
              style: TextStyle(fontSize: 30),
            ),
            SizedBox(height: 10.0),
            Container(
              height: MediaQuery.of(context).size.height * 0.4, // Adjust the height to decrease the size of the second chart
              child: charts.BarChart(
                _seriesWeightData!,
                animate: true,
                animationDuration: Duration(seconds: 5),
                barGroupingType: charts.BarGroupingType.grouped,
                behaviors: [
                  charts.DatumLegend(
                    entryTextStyle: charts.TextStyleSpec(
                      color: charts.MaterialPalette.blue.shadeDefault,
                      fontFamily: 'Georgia',
                      fontSize: 18,
                    ),
                  ),
                ],
                defaultRenderer: charts.BarRendererConfig(
                  groupingType: charts.BarGroupingType.grouped,
                  barRendererDecorator: charts.BarLabelDecorator<String>(),
                  maxBarWidthPx: 20, // Adjust this value to decrease bar width
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
