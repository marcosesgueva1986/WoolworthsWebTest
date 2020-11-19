# WoolworthsWebTest
test using Electron85 browser on Cypress

IMPORTANT NOTES:

It is RECOMMENDED to use Electron85 browser for the test as it is faster and throws fewer errors.

The menu of the website changes depending on the resolution so we use this configuration 1300 x 620
	
PageTimeOut set to 80secs since Chrome takes 63secs to load the page completely.
To avoid stopping the test iwe catch unhandled exception	  

The menues of the Woolworths website contain animations so we have to wait for the animation to load before clicking.

Some browsers like Chrome were slower than Electron in the test so we have to wait a bit for the menu to load before clicking 
Wait is not a best practice in testing so I commented it out the wait mentioned before
