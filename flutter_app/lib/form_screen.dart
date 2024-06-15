import 'package:flutter/material.dart';
import 'package:flutter_app/db/firestore_helper.dart';
import 'package:flutter_app/model/goat_data.dart';
import 'package:uuid/uuid.dart';

class FormScreen extends StatefulWidget {
  @override
  _FormScreenState createState() => _FormScreenState();
}

class _FormScreenState extends State<FormScreen> {
  final _formKey = GlobalKey<FormState>();
  final _heightController = TextEditingController();
  final _weightController = TextEditingController();
  final _diseasesController = TextEditingController();
  final _birthDetailsController = TextEditingController();
  final _vaccinationsController = TextEditingController();

  @override
  void dispose() {
    _heightController.dispose();
    _weightController.dispose();
    _diseasesController.dispose();
    _birthDetailsController.dispose();
    _vaccinationsController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Goat Data'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                controller: _heightController,
                decoration: InputDecoration(labelText: 'Height'),
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter height';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _weightController,
                decoration: InputDecoration(labelText: 'Weight'),
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter weight';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _diseasesController,
                decoration: InputDecoration(labelText: 'Diseases'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter diseases';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _birthDetailsController,
                decoration: InputDecoration(labelText: 'Birth Details'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter birth details';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _vaccinationsController,
                decoration: InputDecoration(labelText: 'Vaccinations'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter vaccinations';
                  }
                  return null;
                },
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () async {
                  if (_formKey.currentState!.validate()) {
                    final newGoatData = GoatData(
                      id: Uuid().v4(),
                      height: double.parse(_heightController.text),
                      weight: double.parse(_weightController.text),
                      diseases: _diseasesController.text,
                      birthDetails: _birthDetailsController.text,
                      vaccinations: _vaccinationsController.text,
                    );
                    await FirestoreHelper().addGoatData(newGoatData);
                    Navigator.pop(context, true);
                  }
                },
                child: Text('Submit'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
