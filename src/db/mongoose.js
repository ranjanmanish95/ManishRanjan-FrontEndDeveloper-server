import  mongoose from 'mongoose';
import fetch from "node-fetch";
import { Launch } from '../models/launch.js';
import { History } from '../models/history.js';
import { Capsules } from '../models/capsules.js';
import { Payload } from '../models/payload.js';

async function getLaunches(){
    const launch = await fetch('https://api.spacexdata.com/v3/launches');
    const response = await launch.json();

    for (let i=0; i<response.length; i++){
       let launchData = new Launch({
          flight_number : response[i].flight_number,
          mission_name: response[i].mission_name,
          rocket_name: response[i].rocket.rocket_name
        })

        launchData.save().then(()=>{
          console.log(launchData);
        }).catch((err)=>{
          console.log(err);
        })
    }
}

async function getHistory(){
    const history = await fetch('https://api.spacexdata.com/v3/history');
    const response = await history.json();

    for (let i=0; i<response.length; i++){
       let historyData = new History({
          id : response[i].id,
          title: response[i].title,
          event_date_utc: response[i].event_date_utc,
          details: response[i].details
        })

        historyData.save().then(()=>{
          console.log(historyData);
        }).catch((err)=>{
          console.log(err);
        })
    }
}

async function getCapsules(){
    const capsules = await fetch('https://api.spacexdata.com/v3/capsules');
    const response = await capsules.json();

    for (let i=0; i<response.length; i++){
       let capsulesData = new Capsules({
          capsule_serial : response[i].capsule_serial,
          capsule_id: response[i].capsule_id,
          status: response[i].status,
          original_launch: response[i].original_launch
        })

        capsulesData.save().then(()=>{
          console.log(capsulesData);
        }).catch((err)=>{
          console.log(err);
        })
    }
}

async function getPayload(){
    const payload = await fetch('https://api.spacexdata.com/v3/payloads');
    const response = await payload.json();

    for (let i=0; i<response.length; i++){
       let payloadData = new Payload({
          payload_id : response[i].payload_id,
          payload_mass_kg : response[i].payload_mass_kg,
          manufacturer: response[i].manufacturer
        })

        payloadData.save().then(()=>{
          console.log(payloadData);
        }).catch((err)=>{
          console.log(err);
        })
    }
}


getHistory();

getPayload();

getCapsules();

getLaunches();