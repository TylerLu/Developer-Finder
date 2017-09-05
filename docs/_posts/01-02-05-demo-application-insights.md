---
title: Application Insights Integration
description:
category: DEMO
---

{% include header.md %}

## How To: View the custom events and metrics in Application Insights to monitor and debug the application

The sample logs status information and exceptions to Application Insights for every step in the process.  This starts moment they are received from the mobile app and continues until the very end when a claim is manually approved or rejected by the claims adjuster.

To view the custom events and metrics in Application Insights follow these steps.

1. Open https://portal.azure.com in a web browser and log in.
2. Click the **Application Insights** link in the left menu.
3. Click the **contosoinsurance** Application Insights application that was created when you deployed all the components.
4. Click **Search**.

    ![]({{site.baseurl}}/img/deployment/App-Insights-Search.png)

5. Observe all of the Custom Events.

    ![]({{site.baseurl}}/img/deployment/App-Insights-Search-Results.png)

6. Click a Custom Event in the list to see the metrics logged for the event.

    >**Note:**  You can refer to the Application Insights Logging Matrix in the [Azure Components document](/Azure Components.docx) to see all of the Custom Metrics logged for each Custom Event.  In the example below you can see this custom event was written by the HandleNewClaim Azure Function when it invoked the ClaimAutoApprover Azure Function.

    ![]({{site.baseurl}}/img/deployment/App-Insights-Custom-Event.png)

**Track an individual claim**

Each claim has a CorrelationId associated with it.  You can see this in the screenshot above.  The CorrelationId is used to track the claims from the moment they are received from the mobile app until the end of the process.  You can track the flow of a single claim through the Azure components and the web application by using the CorrelationId.  Here's how to do it:

1. Copy the CorrelationId from a Custom Event.
2. Click **Search**.

        ![]({{site.baseurl}}/img/deployment/App-Insights-Search.png)

3. Paste the CorrelationId into the **Search textbox** and observe all the Custom Events associated with the CorrelationId.

        >**Note:**  This is an excellent way to debug errors in the system and is also especially helpful to determine how long a given step takes to execute.  This sample typically processes claims from the point where they are submitted in the mobile app to the point where they are ready for manual approval in 15 seconds when running the sample on the most basic App Services service level!

        ![]({{site.baseurl}}/img/deployment/App-Insights-Search-Results-CorrelationId.png) 

**Track an individual claim with Application Insights Analytics**

In addition to viewing all the Custom Events associated with a CorrelationId in the Application Insights Search interface, you can use Application Insights Analytics to track an individual claim.

Here is the query to run in Application Insights Analytics to track an individual claim's CorrelationId.

```
customEvents
    | where customDimensions.CorrelationId =~ "<YOUR CORRELATION ID>"
    | project timestamp, customDimensions.LogType, name, customMeasurements, customMeasurements.Host, customDimensions.Description, customDimensions.FunctionName, customDimensions.Status, customDimensions.Version
| order by timestamp asc
```
As you can see below, this claim took 22 seconds to process.

![]({{site.baseurl}}/img/deployment/Application-Insights-Analytics.png)