import 'package:dio/dio.dart';import 'config.dart';
class ApiClient{ApiClient():dio=Dio(BaseOptions(baseUrl:AppConfig.apiBaseUrl,connectTimeout:const Duration(seconds:15),receiveTimeout:const Duration(seconds:30),headers:{'Content-Type':'application/json'}));final Dio dio;}
