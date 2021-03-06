# tConBelt

## Resume
_The system for the automation and tele-management of the conveyor belt of the Laboratorio de Automatización Industrial (aka. tConBelt). The designed system allows the speed of the conveyor belt to be controlled by varying it from 0 Hz in steps of 9 to 60 Hz, and to review current and historical measurements obtained from both speed and energy consumption._

## Components and their Functions

![Components and connections](https://raw.githubusercontent.com/rogergarciaz/tConBelt_Project/master/ingles_tconbelt.jpg)

_The system has an inductive sensor, whose objective is to detect when the gear teeth pass in front of it and to send a logical high to the programable logic controller (PLC) when said detection occurs_

_The PLC is in charge of activating its outputs which are connected to terminals of the frequency inverter. The PLC additionally with the received signals by the inductive sensor it is in charge of counting the time per cycle which is stored in a storage register_

_The frequency inverter of the motor sets the conveyor belt in motion, it is through its inputs that the speed in the belt is varied_

_The power meter is responsible for measuring the energy consumption of the motor that sets the conveyor belt in motion_

_A single board computer (SBC) is responsible for requesting the data of certain measurements from the power meter, additionally it is responsible for consulting the value of the time per cycle of the conveyor belt stored in the PLC. Subsequently it uploads the data consulted together with the time of the query in the database in FireBase, additionally it is in charge of consulting the values of the digital inputs in the database and writing the corresponding value in the PLC outputs_ 

_The mobile application is responsible for writing the values of the digital inputs corresponding to the speed selected by the user to FireBase. The app also displays the data from the sensing systems stored in FireBase_

## Tools
* [React](https://en.reactjs.org/) - Framework used to develop the wep app
* [Python](https://www.python.org/) - Program used as connector between the hardware and the backend
* [FireBase](https://firebase.google.com/?hl=en) - Platform used for the backend and hosting of the web app
