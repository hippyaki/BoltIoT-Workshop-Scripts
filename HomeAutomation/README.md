# Floor_Monitor_IoT_DashBoard

## Sample of the Dashboard
<br>

![Screenshot (1492)](https://user-images.githubusercontent.com/52236719/126025755-5ab4dddf-6bf9-4270-a591-3f3125efaff1.png)

<br><br>

## Circuit Diagram (Attach Relays instead of LED if real life scenario)

![Circuit Diagram - Floor 1](https://user-images.githubusercontent.com/52236719/126025722-d34fcb3f-dda7-4a35-ad9a-c3f26d11574e.png)
<br>
(The above circuit diagram is not accurate. Refer below for comparable accuracy)
<br><br>
**1.  The first 2 pins from the dashboard are GPIO 0 and 1 (Left to Right) respectively** <br>
**2.  The second 2 pins from the dashboard are GPIO 2 and 3 (Left to Right) respectively** <br>
**1.  The last 1 pin from the dashboard is GPIO 4** <br>

<br><br><br>

## IMPORTANT (For Weather)

1. Visit https://openweathermap.org/api and sign up to create an account. 
2. After signing in, visit https://home.openweathermap.org/api_keys and copy you API key.
3. Visit the folder `js/weather.js` and paste your API KEY in **api**. //Youu API will take 10-15 mins to get activated from the creation of your account.

<br><br>

**WARNING :** In case you don't have Bolt Pro Subscription, visit `js/control.js`, scroll to the very BOTTOM of the script. And change 5000 --> 30000 . This will set your interval of reading analog pin A0 every 30 seconds, instead of 5 seconds. This procedure is to avoid hitting API limits.


<br><br>
Stay tuned for more updates
