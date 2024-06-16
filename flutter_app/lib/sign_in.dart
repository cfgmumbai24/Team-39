
import 'package:flutter_app/core/constants/app_string.dart';
import 'package:flutter_app/core/constants/app_text_styles.dart';

import 'package:flutter_app/widgets/text_field_widget.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app/login_page.dart';
import 'package:flutter_app/widgets/auth_widgets.dart';
import 'package:flutter_app/core/constants/app_icons.dart';
import 'package:flutter_app/core/constants/app_colors.dart';

class DetailsPage extends StatefulWidget {
  const DetailsPage({super.key});

  @override
  State<DetailsPage> createState() => _DetailsPageState();
}


class _DetailsPageState extends State<DetailsPage> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final cpasswordController = TextEditingController();
  final nameController = TextEditingController();
  final phoneController = TextEditingController();
  final String allowedDomain = "ac.in";

  Future<void> _signUp() async {
    if (passwordController.text == cpasswordController.text) {
      try {
        UserCredential userCredential =
            await _auth.createUserWithEmailAndPassword(
          email: emailController.text,
          password: passwordController.text,
        );
        //checking the email and other signup credential
        if (userCredential.user != null && userCredential.user!.email != null) {
          if (userCredential.user!.email!.endsWith("@" + allowedDomain)) {
            Navigator.of(context).pushReplacement(
                MaterialPageRoute(builder: (context) => const SignUpPageUser()));
            String name = nameController.text;

            showToast("$name Signed Up Successfully");
          } else {
            await userCredential.user!.delete();
            showErrorDialog(
                context, "Please use an email from $allowedDomain.");
          }
        }
      } catch (e) {
        showErrorDialog(context, "Error during sign-up: $e");
      }
    } else {
      showToast("Both passwords should be the same");
    }
  }

  /*void _showErrorDialog(String errorMessage) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Error"),
          content: Text(errorMessage),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text("OK"),
            ),
          ],
        );
      },
    );
  }
  void showToast(String message) {
    Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      timeInSecForIosWeb: 1,
      backgroundColor: Colors.black,
      textColor: Colors.white,
      fontSize: 16.0,
    );
  }*/

  @override
  void dispose() {
    super.dispose();
    emailController.dispose();
    passwordController.dispose();
    nameController.dispose();
    phoneController.dispose();
    cpasswordController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.only(top: 21, left: 33, right: 33),
        width: double.infinity,
        height: MediaQuery.of(context).size.height,
        child: SingleChildScrollView(
          child: Column(children: [
            Image.asset(
             AppIcons.app_icon ,
              height: 70,
              width: 70,
            ),
            const Padding(
                padding: EdgeInsets.only(top: 15, bottom: 10),
                child: Text(PROVIDE_YOUR_DETAIL,
                    style: TextStyle(
                        fontSize: 28,
                        fontWeight: FontWeight.w700,
                        fontFamily: AppFontFamily.poppins))),
            /*const CircleAvatar(
              radius: 47,
            ),
            const Text(
              ADD_PHOTO,
              style: TextStyle(fontSize: 12, color: AppColors.grey),
            ),*/
            TextFieldController(
                textEditingController: nameController,
                hinttext: NAME,
                textInputType: TextInputType.name),
            TextFieldController(
                textEditingController: emailController,
                hinttext: EMAIL,
                textInputType: TextInputType.emailAddress),
            TextFieldController(
                textEditingController: phoneController,
                hinttext: PHONE,
                textInputType: TextInputType.phone),

            TextFieldController(
                textEditingController: passwordController,
                hinttext: PASSWORD_TEXT_FIELD,
                textInputType: TextInputType.number),
            TextFieldController(
                textEditingController: cpasswordController,
                hinttext: CONFIRM_PASSWORD_TEXT_FIELD,
                textInputType: TextInputType.number),
            GestureDetector(
              onTap: _signUp,
              child: Container(
                height: 45,
                width: double.infinity,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(7),
                    color: AppColors.secondary),
                margin:
                    EdgeInsets.only(left: 4.5, right: 4.5, top: 30, bottom: 20),
                child: Text('NEXT',
                    style: TextStyle(
                      color: AppColors.white,
                      fontWeight: FontWeight.w500,
                      fontSize: 24,
                    )),
              ),
            ),
            const Text(
              SIGNIN_TEXT_FIELD,
              style: TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 17,
                  fontFamily: AppFontFamily.poppins,
                  color: AppColors.darkgrey),
            ),
            Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                        foregroundColor: Colors.black,
                        backgroundColor:Colors.green,
                        padding:
                            EdgeInsets.symmetric(horizontal: 30, vertical: 3),
                        textStyle: TextStyle(fontSize: 15),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0),
                        )),
                    onPressed: () {},
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.g_translate,
                        ),
                        SizedBox(width: 20),
                        Text(
                          "sign in with google",
                          style: TextStyle(fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              SizedBox(
                height: 8,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                        foregroundColor: Colors.black,
                        backgroundColor: Colors.green,
                        padding:
                            EdgeInsets.symmetric(horizontal: 30, vertical: 3),
                        textStyle: TextStyle(fontSize: 15),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0),
                        )),
                    onPressed: () {},
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.facebook),
                        SizedBox(width: 20),
                        Text(
                          "sign in with facebook",
                          style: TextStyle(fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
          ]),
        ),
      ),
    );
  }
}
