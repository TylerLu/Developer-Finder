---
title: Known Issues
description:
author: Cory Fowler
category: RESOURCES
---

{% include header.md %}

Here is a list of known issues in the Contoso Insurance Sample. If you believe you've found an issue which isn't listed here, please [submit an issue on GitHub](https://github.com/{{site.githubOrg}}/{{site.githubRepo}}/issues)

### Android Client

* There is an issue using the Android Client from the [Visual Studio Emulator for Android][VSAndroid] when it is being used on a Domain or Corporate Network. Please review this [article](https://msdn.microsoft.com/en-us/library/mt228282.aspx#DomainNetwork) for more details.

* It is possible that the [Visual Studio Emulator for Android][VSAndroid] could be configured to use the Android SDK from a different path from where you are downloading your components via the Xamarin Tools. Please review this [article](https://msdn.microsoft.com/en-us/library/mt228282.aspx#ADB) for more details. 

* If you would like to use the [Visual Studio Emulator for Android][VSAndroid] and have a computer with less than 8GB of RAM, or are having high memory issues booting the VM in Hyper-V. There is a registry edit which can be made to reduce the VMs Memory to 2GB instead of 3GB. Please review this [Microsoft KB article](https://support.microsoft.com/en-us/kb/2911380) for more details.

  > **Note**: The above KB Article references the Windows Phone Emulator, however, workaround is still valid for the Android emulator.
  {: .blockquote .alert-info}

[VSAndroid]: https://www.visualstudio.com/vs/msft-android-emulator
[AndroidTroubleshoot]: https://msdn.microsoft.com/en-us/library/mt228282.aspx