class GoatData {
  final String id;
  final double height;
  final double weight;
  final String diseases;
  final String birthDetails;
  final String vaccinations;

  GoatData({
    required this.id,
    required this.height,
    required this.weight,
    required this.diseases,
    required this.birthDetails,
    required this.vaccinations,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'height': height,
      'weight': weight,
      'diseases': diseases,
      'birthDetails': birthDetails,
      'vaccinations': vaccinations,
    };
  }

  static GoatData fromMap(Map<String, dynamic> map) {
    return GoatData(
      id: map['id'],
      height: map['height'],
      weight: map['weight'],
      diseases: map['diseases'],
      birthDetails: map['birthDetails'],
      vaccinations: map['vaccinations'],
    );
  }
}
