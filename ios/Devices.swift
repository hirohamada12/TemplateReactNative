//
//  Devices.swift
//  TemplateRN
//
//  Created by Hiro on 06/12/2020.
//

import Foundation
import UIKit


@objc(Devices)
class Devices: NSObject,RCTBridgeModule {
  
  static func moduleName() -> String! {
    return "Devices"
  }
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func getDeviceName(_ callback:RCTResponseSenderBlock) -> Void {
    do {
      let devicesName = UIDevice.current.name
      callback([NSNull(),devicesName])
    } catch let error as NSError {
      callback([error,NSNull()])
    }
  }
  @objc func callbackMethod(callback: RCTResponseSenderBlock) -> Void {
    let resultsDict = [
      "success" : true
    ];
    callback([NSNull() ,resultsDict])
  }
}
