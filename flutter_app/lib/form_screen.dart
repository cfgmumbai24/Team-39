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
  final _birthDateController = TextEditingController();
  final _numberOfOffspringController = TextEditingController();
  final _genderOfOffspringController = TextEditingController();
  final _healthConditionController = TextEditingController();
  final _birthWeightController = TextEditingController();
  final _birthComplicationsController = TextEditingController();
  final _motherConditionController = TextEditingController();
  final _vaccinationsController = TextEditingController();
  final _colorController = TextEditingController();

  @override
  void dispose() {
    _heightController.dispose();
    _weightController.dispose();
    _diseasesController.dispose();
    _birthDateController.dispose();
    _numberOfOffspringController.dispose();
    _genderOfOffspringController.dispose();
    _healthConditionController.dispose();
    _birthWeightController.dispose();
    _birthComplicationsController.dispose();
    _motherConditionController.dispose();
    _vaccinationsController.dispose();
    _colorController.dispose();
    super.dispose();
  }

  double calculateBMI(double height, double weight) {
    double heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  }

  String formatHexColor(String input) {
    if (input.length == 6) {
      return "#FF$input";
    }
    if (input.length == 7) {
      return "#FF${input.substring(1)}";
    }
    return input;
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
          child: ListView(
            children: [
              TextFormField(
                controller: _heightController,
                decoration: InputDecoration(labelText: 'Height (cm)'),
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
                decoration: InputDecoration(labelText: 'Weight (kg)'),
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
                controller: _birthDateController,
                decoration: InputDecoration(labelText: 'Date of Birth'),
                keyboardType: TextInputType.datetime,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter date of birth';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _numberOfOffspringController,
                decoration: InputDecoration(labelText: 'Number of Offspring'),
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter number of offspring';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _genderOfOffspringController,
                decoration: InputDecoration(labelText: 'Gender of Offspring'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter gender of offspring';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _healthConditionController,
                decoration: InputDecoration(labelText: 'Health Condition'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter health condition';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _birthWeightController,
                decoration: InputDecoration(labelText: 'Birth Weight'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter birth weight';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _birthComplicationsController,
                decoration: InputDecoration(labelText: 'Birth Complications'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter birth complications';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _motherConditionController,
                decoration: InputDecoration(labelText: 'Mother’s Condition Post-Birth'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter mother’s condition post-birth';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _colorController,
                decoration: InputDecoration(labelText: 'Color (hex)'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter color';
                  }
                  if (!RegExp(r'^#?([0-9A-Fa-f]{6})$').hasMatch(value)) {
                    return 'Please enter a valid hex color code';
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
                    final height = double.parse(_heightController.text);
                    final weight = double.parse(_weightController.text);
                    final bmi = calculateBMI(height, weight);
                    final color = formatHexColor(_colorController.text);

                    final newGoatData = GoatData(
                      id: Uuid().v4(),
                      height: height,
                      weight: weight,
                      diseases: _diseasesController.text,
                      birthDetails: 'Date: ${_birthDateController.text}, '
                          'Offspring: ${_numberOfOffspringController.text}, '
                          'Gender: ${_genderOfOffspringController.text}, '
                          'Condition: ${_healthConditionController.text}, '
                          'Weight: ${_birthWeightController.text}, '
                          'Complications: ${_birthComplicationsController.text}, '
                          'Mother’s Condition: ${_motherConditionController.text}',
                      vaccinations: _vaccinationsController.text,
                      color: color,
                      bmi: bmi,
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
