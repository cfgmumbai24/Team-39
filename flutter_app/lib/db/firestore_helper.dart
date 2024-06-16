import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_app/model/goat_data.dart';

class FirestoreHelper {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Future<void> addGoatData(GoatData goatData) {
    return _db.collection('goat_data').doc(goatData.id).set(goatData.toMap());
  }

  Future<List<GoatData>> getGoatData() async {
    QuerySnapshot querySnapshot = await _db.collection('goat_data').get();
    return querySnapshot.docs.map((doc) => GoatData.fromMap(doc.data() as Map<String, dynamic>)).toList();
  }
}
