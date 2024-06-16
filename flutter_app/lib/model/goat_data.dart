class GoatData {
  final String id;
  final double height;
  final double weight;
  final String diseases;
  final String birthDetails;
  final String vaccinations;
  final double bmi;
  final String color;

  GoatData({
    required this.id,
    required this.height,
    required this.weight,
    required this.diseases,
    required this.birthDetails,
    required this.vaccinations,
    required this.bmi,
    required this.color,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'height': height,
      'weight': weight,
      'diseases': diseases,
      'birthDetails': birthDetails,
      'vaccinations': vaccinations,
      'bmi': bmi,
      'color': color,
    };
  }

  factory GoatData.fromMap(Map<String, dynamic> map) {
    return GoatData(
      id: map['id'] ?? '',
      height: map['height']?.toDouble() ?? 0.0,
      weight: map['weight']?.toDouble() ?? 0.0,
      diseases: map['diseases'] ?? '',
      birthDetails: map['birthDetails'] ?? '',
      vaccinations: map['vaccinations'] ?? '',
      bmi: map['bmi']?.toDouble() ?? 0.0,
      color: map['color'] ?? '#FF000000', // Default to black color
    );
  }
}
