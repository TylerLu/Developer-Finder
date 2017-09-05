
{% include header.md %}

The Developer Finder application is a container based application that demonstrates how to make a web application with multiple technologies and containers.

This sample includes a web application that allows users to authenticate and register with their GitHub and LinkedIn accounts, import data into their user profiles from those systems, and supplement their profile with additional information. The web application also provides users the ability to search for developers based on the information in their profile, and even suggests friends based on common profile information.

In addition to the profile and search capabilities, the web application interacts with a custom chat system that allows users to engage in chat conversation on the web site.

The entire application is packaged inside Docker containers and deployed to Microsoft Azure. In addition to the container apps, Azure resources such as a MySQL database, Application Insights, and other Azure services are used to implement the application.. 
