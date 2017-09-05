# Azure Web Application for Containers - Developer Finder

The Developer Finder application is a container based application that demonstrates how to make a web application with multiple technologies and containers.  

This sample includes a web application that allows users to authenticate and register with their GitHub and LinkedIn accounts, import data into their user profiles from those systems, and supplement their profile with additional information.  The web application also provides users the ability to search for developers based on the information in their profile, and even suggests friends based on common profile information.

In addition to the profile and search capabilities, the web application interacts with a custom chat system that allows users to engage in chat conversation on the web site.

The entire application is packaged inside Docker containers and deployed to Microsoft Azure. In addition to the container apps, Azure resources such as a MySQL database, Application Insights, and other Azure services are used to implement the application.

**Table of contents**

* [Architecture](#architecture)
  * [Containers](#Containers)
  * [Web App](#web-app)
  * [Chat App](#chat-app)
  * [Azure Services](#azure-services)
  * [Databases](#databases)
  * [Application Insights](#application-insights)
  * [Geo-Replication](#geo-replication)
* [Deployment](#deployment)
  * [Choose a name for the app](#choose-a-name-for-the-app)
  * [Register OAuth applications](#register-oauth-applications)
  * [GitHub Authorization](#github-authorization)
  * [[Optional] Register a Twilio account to send SMS](#optional-register-a-twilio-account-to-send-sms)
  * [Deploy the Azure Components](#deploy-the-azure-components)
  * [Configure TrackCustomEvent function URL](#configure-trackcustomevent-function-url)
  * [Set up the CI/CD](#set-up-the-cicd)
  * [Validate deployment](#validate-deployment)
* [Demo scenario overview and flow](#demo-scenario-overview-and-flow)
* [Running the demo](#running-the-demo)

## Architecture 

The following diagram illustrates the overall system architecture.

![]({{site.baseurl}}/img/architecture.jpg)

The main components of the application are described in subsequent sections in this document.

### Containers



### Web App



### Chat App



### Azure Services



### Databases


### Application Insights



### Geo-Replication



## Deployment

### Choose a name for the app



### Register OAuth applications



### GitHub Authorization



### [OPTIONAL STEP] Register a Twilio account to send SMS 



### Deploy the Azure Components

### Configure TrackCustomEvent function URL



### Set up CI/CD



### Validate deployment



## Demo scenario overview and flow

See the [Demo Script](Demo%20Script.pptx) slide deck.

## Running the demo

Follow the steps in [Demo Script](Demo%20Script.pptx) slide deck.

## Contributors ##
| Roles                      | Author(s)                                |
| -------------------------- | ---------------------------------------- |
| Project Lead / Architect   | Todd Baginski (Microsoft MVP, Canviz) @tbag |
| Architect / Developer Lead | Tyler Lu (Canviz) @TylerLu               |
| Developer                  | Albert Xie (Canviz)                      |
| Developer                  | Hubert Sui (Canviz)                      |
| Design                     | Justin So (Canviz)                       |
| Testing                    | Cindy Yan (Canviz)                       |
| Sponsor / Support          | Ahmed Elnaby (Microsoft)                 |
| Sponsor / Support          | Stella Lin (Microsoft)                   |

## Version history ##

| Version | Date            | Comments        |
| ------- | --------------- | --------------- |
| 1.0     | August 31, 2017 | Initial release |

## Disclaimer ##
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
