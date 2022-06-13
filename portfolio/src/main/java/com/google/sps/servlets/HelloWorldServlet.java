package com.google.sps.servlets;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
// import com.google.sps.data.ServerStats;
// import com.google.gson.Gson;
import com.google.gson.Gson;
/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {
    String[] array = {"apple", "pear", "watermelon"};
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // response.setContentType("text/html;");
    // response.getWriter().println("Hello Gary!");
    // JSONArray jsArray = new JSONArray(list);
    // String json = convertToJsonUsingGson(array);
    int[] numbers = {1, 1, 2, 3, 5, 8, 13};
String[] fruits = {"Apple", "Cucumber", "Pineapple", "Grape", "Orange", "Pawpaw", "Water melon"};
// Create a new instance of Gson
Gson gson = new Gson();
// Convert numbers array into JSON string.
String numbersJson = gson.toJson(numbers);
// Convert strings array into JSON string
String fruitsJson = gson.toJson(fruits);

    response.setContentType("application/json;");
    response.getWriter().println(numbersJson);
   


  }

//   private String convertToJsonUsingGson(String[] array) {
//     Gson gson = new Gson();
//     String json = gson.toJson(array);
//     return json;
//   }


}
