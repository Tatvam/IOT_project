<h1 align="center">Welcome to Temperature_Plot_MQTT 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/matbor/mqtt2highcharts/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
</p>

## To Install npm in ubuntu
```sh
sudo apt-get install nodejs
sudo apt-get install npm
```

## Install from the root directory of the local repo

```sh
npm install 

(this will install all the required node dependencies)
```

## How to run (on terminal)

```sh
node publisher.js
node receiver.js

Open file index.html
```

## Description 

```sh

This project provides a mqtt based javascript implementation of a temperature recording and plotting.
The publisher uses a random number generator to publish temperature data
The subscriber get this data from mqtt broker and create a express server where all the data is stored. This data is then used to created an extended plot.
Mosquitto test broker service was used for our purposes

```

## Author

👤 **Tatvam Dadheech, Rahul Kumar, Pullak Barik, Gauravi Kabadi, Methuku Preetham**

* Github: [@Tatvam](https://github.com/Tatvam)
* Github: [@Preetham](https://github.com/methuku123)
* Github: [@Pullak](https://github.com/TipsbyPullak)
* Github: [@Rahul](https://github.com/rk36)

## Show your support

Give a ⭐️ if this project helped you!
