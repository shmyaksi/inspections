    <html>
        <head><title>JSP</title></head>
        <body>
            <%
    int k = 0;
}
  %>
        <h2>You'll have a luck day!</h2><p>(<%= num %>)</p>
            <%
    } else {
  %>
        <h2>Well, life goes on ... </h2><p>(<%= num %>)</p>
            <%
    }
  %>
        <a href="<%= request.getRequestURI() %>"><h3>Try Again</h3></a>
        </body>
        </html>