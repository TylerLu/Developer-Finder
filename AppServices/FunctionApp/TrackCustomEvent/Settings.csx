using Microsoft.Azure;

public static class Settings
{
    public static readonly string ApplicationInsightsInstrumentationKey = CloudConfigurationManager.GetSetting("MS_ApplicationInsightsInstrumentationKey");
}