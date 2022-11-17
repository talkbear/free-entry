import 'package:flutter/material.dart';

List items = [
  {"description": "聊你所想 随时地畅所欲言", "image": "assets/slash1.png"},
  {"description": "每日指南 发现身边的精彩", "image": "assets/slash2.png"},
  {"description": "探索未知 每天全新的自己", "image": "assets/slash3.png"}
];

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});
  // _WelcomeScreenState createState() => _WelcomeScreenState();
  @override
  Widget build(BuildContext context) {
    final PageController pageController = PageController();

    return PageView(
      controller: pageController,
      children: <Widget>[
        Container(
          decoration: const BoxDecoration(color: Colors.white),
          // child: const Text('first')),
          child: Stack(children: <Widget>[
            Positioned(
                top: -100,
                left: -100,
                child: Container(
                  decoration: BoxDecoration(
                      color: const Color(0x80CBCBCB), shape: BoxShape.circle),
                  width: 200,
                  height: 200,
                  margin: EdgeInsets.all(0),
                  alignment: Alignment.topLeft,
                )),
            // Image(image: AssetImage('assets/slash1.png')),
            Center(
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Image.asset('assets/slash1.png',
                        width: 340, fit: BoxFit.fitWidth),
                    SizedBox(
                      height: 20,
                    ),
                    Text("聊你所想 随时随地畅所欲言",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                            decoration: TextDecoration.none,
                            color: Colors.black,
                            fontSize: 20))
                  ]),
            ),
            Positioned(
                bottom: -100,
                right: -100,
                child: Container(
                  decoration: BoxDecoration(
                      color: const Color(0x80C56E33), shape: BoxShape.circle),
                  width: 200,
                  height: 200,
                  margin: EdgeInsets.all(0),
                  alignment: Alignment.topLeft,
                )),
          ]),
        ),
        Container(
          decoration: const BoxDecoration(color: Colors.white),
          // child: const Text('first')),
          child: Stack(children: <Widget>[
            Positioned(
                top: -100,
                left: -100,
                child: Container(
                  decoration: BoxDecoration(
                      color: const Color(0x80CBCBCB), shape: BoxShape.circle),
                  width: 200,
                  height: 200,
                  margin: EdgeInsets.all(0),
                  alignment: Alignment.topLeft,
                )),
            Center(
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Image.asset('assets/slash2.png',
                        width: 340, fit: BoxFit.fitWidth),
                    SizedBox(
                      height: 20,
                    ),
                    Text("每日指南 发现身边的精彩",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                            decoration: TextDecoration.none,
                            color: Colors.black,
                            fontSize: 20))
                  ]),
            ),
            Positioned(
                bottom: -100,
                right: -100,
                child: Container(
                  decoration: BoxDecoration(
                      color: const Color(0x80C56E33), shape: BoxShape.circle),
                  width: 200,
                  height: 200,
                  margin: EdgeInsets.all(0),
                  alignment: Alignment.topLeft,
                )),
          ]),
        ),
        Container(
          decoration: const BoxDecoration(color: Colors.white),
          // child: const Text('first')),
          child: Stack(children: <Widget>[
            Positioned(
                top: -100,
                left: -100,
                child: Container(
                  decoration: BoxDecoration(
                      color: const Color(0x80CBCBCB), shape: BoxShape.circle),
                  width: 200,
                  height: 200,
                  margin: EdgeInsets.all(0),
                  alignment: Alignment.topLeft,
                )),
            Center(
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Image.asset('assets/slash3.png',
                        width: 340, fit: BoxFit.fitWidth),
                    SizedBox(
                      height: 20,
                    ),
                    Text("探索未知 每天做全新的自己",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                            decoration: TextDecoration.none,
                            color: Colors.black,
                            fontSize: 20)),
                    SizedBox(height: 20),
                    GestureDetector(
                        onTap: () {
                          Navigator.pushReplacementNamed(context, '/');
                        },
                        child: Container(
                          width: 148,
                          height: 42,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(21),
                            color: Color(0xffc56e33),
                          ),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Text(
                                "开启虫洞",
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 16,
                                    decoration: TextDecoration.none),
                              ),
                            ],
                          ),
                        )),
                  ]),
            ),
            Positioned(
                bottom: -100,
                right: -100,
                child: Container(
                  decoration: BoxDecoration(
                      color: const Color(0x80C56E33), shape: BoxShape.circle),
                  width: 200,
                  height: 200,
                  margin: EdgeInsets.all(0),
                  alignment: Alignment.topLeft,
                )),
          ]),
        ),
      ],
    );
  }
}
