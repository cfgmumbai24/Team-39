import 'package:flutter/material.dart';
import 'package:flutter_app/form_screen.dart';
import 'package:flutter_app/db/firestore_helper.dart';
import 'package:flutter_app/model/goat_data.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late Future<List<GoatData>> goatDataList;

  @override
  void initState() {
    super.initState();
    goatDataList = FirestoreHelper().getGoatData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Goat Entrepreneurship'),
      ),
      body: FutureBuilder<List<GoatData>>(
        future: goatDataList,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return Center(child: Text('No data available'));
          } else {
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) {
                final goatData = snapshot.data![index];
                return ListTile(
                  title: Text('Height: ${goatData.height}, Weight: ${goatData.weight}'),
                  subtitle: Text('Diseases: ${goatData.diseases}'),
                );
              },
            );
          }
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () async {
          final result = await Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => FormScreen()),
          );
          if (result == true) {
            setState(() {
              goatDataList = FirestoreHelper().getGoatData();
            });
          }
        },
      ),
    );
  }
}
