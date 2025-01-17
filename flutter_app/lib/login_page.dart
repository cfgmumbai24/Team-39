import 'package:flutter_app/core/constants/app_colors.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import '../../../../../core/constants/app_icons.dart';
import '../../../../../core/constants/app_string.dart';
import 'package:flutter_app/widgets/auth_widgets.dart';
import 'package:flutter_app/home_screen.dart';

class SignUpPageUser extends StatefulWidget {
  const SignUpPageUser({super.key});

  @override
  State<SignUpPageUser> createState() => SignUpPageUserState();
}

class SignUpPageUserState extends State<SignUpPageUser> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final String allowedDomain = "ac.in";
  bool isChecked = false;

  /* void showToast(String message) {
    Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      timeInSecForIosWeb: 1,
      backgroundColor: AppColors.black,
      textColor: AppColors.white,
      fontSize: 16.0,
    );
  }*/

  Future<void> _signIn() async {
    try {
      UserCredential userCredential = await _auth.signInWithEmailAndPassword(
        email: _emailController.text,
        password: _passwordController.text,
      );
      if (userCredential.user != null && userCredential.user!.email != null) {
        if (userCredential.user!.email!.endsWith("@" + allowedDomain)) {
          Navigator.of(context).pushReplacement(
              MaterialPageRoute(builder: (context) =>  HomeScreen()));
          showToast("User Signed In Successfully");
        } else {
          _showErrorDialoge("Please use an Valid email of $allowedDomain");
        }
      }
    } catch (e) {
      _showErrorDialoge(
          "Error during sign-in: Please check credentials and try again $e");
    }
  }

  void _showErrorDialoge(String errorMessage) {
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

  Future<void> _resetPassword(BuildContext context) async {
    try {
      await _auth.sendPasswordResetEmail(email: _emailController.text);
      showSuccessDialog(context);
    } catch (e) {
      showErrorDialog(context, e.toString());
    }
  }

  /*void _showSuccessDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Password Reset Email Sent"),
          content: const Text(
              "Check your email for instructions to reset your password."),
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
  }*/

  /*void _showErrorDialog(BuildContext context, String errorMessage) {
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
*/
  @override
  void dispose() {
    super.dispose();
    _emailController.dispose();
    _passwordController.dispose();
  }

  bool _rememberMe = false;
  bool _obscureText = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              AppIcons.app_icon,
              height: 80,
              width: 80,
            )
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              SizedBox(height: 50),
              Padding(
                padding: const EdgeInsets.only(right: 110),
                child: Text(
                  WELCOME_TEXT,
                  style: TextStyle(fontSize: 32, fontWeight: FontWeight.w700),
                ),
              ),
              SizedBox(height: 15),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextFormField(
                  controller: _emailController,
                  decoration: InputDecoration(
                      labelText: EMAIL_TEXT_FIELD,
                      border: OutlineInputBorder(
                        borderRadius: const BorderRadius.all(
                          const Radius.circular(5.0),
                        ),
                      ),
                      contentPadding: EdgeInsets.symmetric(vertical: 10.0)),
                ),
              ),
              SizedBox(height: 10),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextField(
                  controller: _passwordController,
                  obscureText: _obscureText,
                  decoration: InputDecoration(
                      labelText: PASSWORD_TEXT_FIELD,
                      border: OutlineInputBorder(
                        borderRadius: const BorderRadius.all(
                          const Radius.circular(5.0),
                        ),
                      ),
                      contentPadding: EdgeInsets.symmetric(vertical: 10.0),
                      suffixIcon: IconButton(
                        icon: Icon(_obscureText
                            ? Icons.visibility
                            : Icons.visibility_off),
                        onPressed: () {
                          setState(() {
                            _obscureText = !_obscureText;
                          });
                        },
                      )),
                ),
              ),
              Row(
                children: [
                  Checkbox(
                      side: BorderSide(
                        color: AppColors.borderColor,
                      ),
                      value: _rememberMe,
                      onChanged: (value) {
                        setState(() {
                          _rememberMe = value!;
                        });
                      }),
                  Text(
                    REMEMBER_TEXT_FIELD,
                    style:
                        TextStyle(color: AppColors.borderColor, fontSize: 13),
                  ),
                  Spacer(),
                  TextButton(
                    onPressed: () {
                      _resetPassword(context);
                    },
                    child: Text(
                      FORGET_PASSWORD_TEXT_FIELD,
                      style:
                          TextStyle(color: AppColors.borderColor, fontSize: 13),
                    ),
                  )
                ],
              ),
              SizedBox(height: 16),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                    foregroundColor:Colors.black,
                    backgroundColor: AppColors.tabBackgroundColor,
                    padding: EdgeInsets.symmetric(horizontal: 120, vertical: 7),
                    textStyle: TextStyle(fontSize: 15),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(5.0),
                    )),
                child: Text(
                  SIGNIN_TEXT_FIELD,
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                onPressed: _signIn,
              ),
              SizedBox(height: 13),
              Row(
                children: [
                  Text(
                    '    New Here ?',
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700),
                  ),
                  Text(
                    CREATE_ACCOUNT_TEXT_FIELD,
                    style: TextStyle(
                        color: AppColors.tabBackgroundColor,
                        fontSize: 13,
                        fontWeight: FontWeight.w700),
                  )
                ],
              ),
              SizedBox(height: 40),
              Text(
                SIGNIN_TEXT_FIELD,
                style: TextStyle(
                    color: AppColors.borderColor,
                    fontSize: 20,
                    fontWeight: FontWeight.w800),
              ),
              SizedBox(
                height: 20,
              ),
              /*Row(
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
                        Icon(
                          Icons.g_translate,
                        ),
                        SizedBox(width: 20),
                        Text(
                          GOOGLE_SIGIN_TEXT_FIELD,
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
                        foregroundColor:Colors.black,
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
                          FACEBOOK_SIGIN_TEXT_FIELD,
                          style: TextStyle(fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ],
              ),*/
            ],
          ),
        ),
      ),
    );
  }
}
