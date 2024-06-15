import 'package:cloud_firestore/cloud_firestore.dart';
import '../model/goat_data.dart';

class FirestoreHelper {
  final CollectionReference goatCollection =
      FirebaseFirestore.instance.collection('goats');

  Future<void> addGoatData(GoatData goatData) {
    return goatCollection.doc(goatData.id).set(goatData.toMap());
  }

  Future<List<GoatData>> getGoatData() async {
    QuerySnapshot snapshot = await goatCollection.get();
    return snapshot.docs.map((doc) {
      return GoatData.fromMap(doc.data() as Map<String, dynamic>);
    }).toList();
  }
}
