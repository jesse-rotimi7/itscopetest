// import river_2 from "../../assets/images/products/River_2.png";
// import river_2_pro from "../../assets/images/products/river_2Pro.png";
import river_2_solar from "../../assets/images/products/river2_solar.png";
import river_2_max_solar from "../../assets/images/products/river2_maxSolar.png";
import delta_2_solar from "../../assets/images/products/delta2_Solar.png";
import delta_2_max_solar from "../../assets/images/products/delta__2maxSolar.png";
// import river_3_plus from "../../assets/images/products/river_3_plus.webp";
// import river_3_max_plus from "../../assets/images/products/River_3_Max_Plus.png";
// import Samsung from "../../assets/images/products/S25.jpg";
// import tecno from "../../assets/images/products/tecno_spark.png";
// import pavilion from "../../assets/images/products/pavilion.webp";
// import printer from "../../assets/images/products/printer.webp";
// import hp_printer from "../../assets/images/products/hp_printer.png";
// import logitech_mk_710 from "../../assets/images/products/logitech_key.webp";
// import logitech_c310 from "../../assets/images/products/logitech.jpg";
// import laptop from "../../assets/images/products/thinkpad.webp";
// Laptops / printers (inactive — solar-only catalog for now)
// import apple_laptop from "../../assets/images/products/macbook.png";
// import dell_laptop from "../../assets/images/products/G15.png";
// import jetpro_printer from "../../assets/images/products/jetpro.png";
// import laserjet_printer from "../../assets/images/products/laserjet.png";
// import probook_laptop from "../../assets/images/products/probook.png";
// import thinkpad_laptop from "../../assets/images/products/thinkpaddy.png";
// Generic Product interface that can work for any category
export interface ProductSpecs {
  [key: string]: string; // Flexible specs object
}

export interface Product {
  id: number
  name: string
  price: string
  newprice: string 
  image: string
  category: string
  specs: ProductSpecs
}

// Product data organized by category
export const products: Product[] = [
  // Phones
  {
    id: 1,
    name: "EcoFlow RIVER 2 Max + 160W Portable Solar Panel",
    price: "₦923,398.00",
    newprice: "₦615,574.00",
    image: river_2_max_solar,
    category: "Inverters",
    specs:{
      capacity: "512Wh",
      acOutput: "Pure Sine Wave, 500W total (surge 1000W), 230V ~ 50Hz/60Hz",
      cycleLife: "80%+ capacity after 3000 cycles",
      solarInput: "11-50V 13A, 220W Max",
      acInput: "220-240V ~ 50Hz/60Hz, 660W Max",
      carInput: "12V/24V, 8A, 100W Max",
      usbCInputOutput: "5/9/12/15/20V, 5A, 100W Max",
      dcOutput: "12.6V, 10A/3A/3A, 126W Max",
      usbAOutput: "5V, 2.4A, 12W Max",
      dimensions: "270 x 260 x 196mm",
      netWeight: "Approximately 6kg",
      cellChemistry: "LFP",
      appControl: "Wi-Fi, Bluetooth",
      chargeTemperature: "0°C to 45°C",
      dischargeTemperature: "-10°C to 45°C",
      optimalOperatingTemperature: "20°C to 30°C",
      storageTemperature: "-10°C to 45°C (20°C to 30°C is best)",
      dc5521Output: "12.6V, 3A, 36W Max"
    }
    
    
  },
  {
    id: 8,
    name: "EcoFlow RIVER 2 + 110W Portable Solar Panel",
    price: "₦651,238.00",
    newprice: "₦338,500.00",
    image: river_2_solar,
    category: "Inverters",
    specs: {
      capacity: "256Wh",
      acOutput: "Pure Sine Wave, 300W total (surge 600W), 230V 50Hz/60Hz",
      cycleLife: "80%+ capacity after 3000 cycles",
      acInput: "220-240V 50Hz/60Hz, 360W Max",
      solarInput: "11-30V, 8A, 110W Max",
      carInput: "12V/24V, 8A, 100W Max",
      usbCInputOutput: "5/9/12/15/20V, 3A, 60W Max",
      dcOutput: "12.6V, 8A, 100W Max",
      usbAOutput: "5V, 2.4A, 12W Max",
      rechargeAc: "0-80% in 48 minutes, 0-100% in 60 minutes (360W Max)",
      rechargeCar: "3 hours",
      rechargeUsbC: "6 hours",
      rechargeSolar: "2.5 hours (1x 110W portable solar panel)",
      cellChemistry: "LFP",
      netWeight: "Approximately 3.5kg",
      dimensions: "245 x 214 x 142 mm",
      appControl: "Wi-Fi, Bluetooth",
      chargeTemperature: "0°C to 45°C",
      dischargeTemperature: "-10°C to 45°C",
      optimalOperatingTemperature: "20°C to 30°C",
      storageTemperature: "-10°C to 45°C (20°C to 30°C is best)"
    }
  },
  {
    id: 9,
    name: "EcoFlow DELTA 2 Max + 220W Portable Solar Panel",
    price: "₦2,176,958.00",
    newprice: "₦1,600,250.00",
    image: delta_2_max_solar,
    category: "Inverters",
    specs: {
      expandableCapacity: "2-6kWh (add up to 2 DELTA 2 Max Smart Extra Batteries to reach 6144Wh)",
      acOutput: "Up to 3100W with X-Boost mode; powers up to 13 devices including 4 AC outlets",
      fastestRecharging: "AC + Solar charging; up to 1000W solar input; 0-100% in as fast as 2.3 hours",
      cycleLife: "LFP battery with 3000 cycles to 80% capacity (about 10 years daily use)",
      energySavings: "Pair with PowerStream microinverter to store solar energy for peak hours",
      mpptEfficiency: "99% MPPT efficiency for improved daytime solar generation",
      solarConversionEfficiency: "0-100% in 2.3 hours (4 sets), 3.1 hours (3 sets)",
      appControl: "Custom in-app energy management for input/output power and battery levels",
      warranty: "5 years for DELTA 2 Max, 24 months for 220W Solar Panel"
    }
  },
  {
    id: 10,
    name: "EcoFlow DELTA 2 + 220W Portable Solar Panel",
    price: "₦1,439,438.00",
    newprice: "₦1,047,443.00",
    image: delta_2_solar,
    category: "Inverters",
    specs: {
      capacity: "512Wh",
      netWeight: "Approximately 6kg",
      dimensions: "270 x 260 x 196mm",
      acInput: "220-240V ~ 50Hz/60Hz, 660W Max",
      solarInput: "11-50V 13A, 220W Max",
      carInput: "12V/24V, 8A, 100W Max",
      usbCInputOutput: "5/9/12/15/20V, 5A, 100W Max",
      dcOutput: "12.6V, 10A/3A/3A, 126W Max",
      usbAOutput: "5V, 2.4A, 12W Max",
      acOutput: "Pure Sine Wave, 500W total (surge 1000W), 230V ~ 50Hz/60Hz",
      cycleLife: "80%+ capacity after 3000 cycles",
      cellChemistry: "LFP",
      dischargeTemperature: "-10°C to 45°C",
      chargeTemperature: "0°C to 45°C",
      optimalOperatingTemperature: "20°C to 30°C",
      storageTemperature: "-10°C to 45°C (20°C to 30°C is best)",
      dc5521Output: "12.6V, 3A, 36W Max",
      appControl: "Wi-Fi, Bluetooth"
    }
  },

  /*
  // Laptops & printers — uncomment when bringing non-solar SKUs back
  {
    id: 2,
    name: "HP Pro book 4440S 8GB RAM 256GB ROM",
    price: "₦26,123",
    newprice: "₦371,250",
    image: probook_laptop,
    category: "laptops",
    specs:{
      processorType: "Core i3",
      processorSpeed: "2.5 GHz",
      hdd: "500GB SATA Hard Disc Drive",
      ram: "4GB DDR3",
      graphicsProcessor: "HD 420 display",
      opticalDrive: "DVD±RW (±R DL) / DVD-RAM",
      audioOutput: "High Definition Audio",
      wirelessProtocol: "802.11b/g/n, Bluetooth 2.1 EDR",
      interfaces: "Display Port, VGA, Headphone output, Microphone input, LAN, 3 x USB 2.0, USB 2.0/eSATA, 4-pin FireWire",
      memoryCardReader: "SD Card, Memory Stick, Memory Stick PRO, MultiMediaCard, xD-Picture Card, MMCplus, SDHC Card",
      installedOs: "Windows 10"
    }
  },

  {
    id: 5,
    name: "Hp office jet pro 9123 AIO",
    price: "₦449,185.00",
    newprice: "₦376,650",
    image: jetpro_printer,
    category: "printers",
    specs:{
      functions: "Print, Copy, Scan, Fax",
      printSpeedBlack: "Up to 22 ppm (ISO)",
      printSpeedColor: "Up to 18 ppm (ISO)",
      duplexPrinting: "Automatic",
      monthlyDutyCycle: "Up to 25,000 pages",
      recommendedMonthlyVolume: "Up to 1,500 pages",
      printQualityBlack: "1200 x 1200 dpi",
      printQualityColor: "Up to 4800 x 1200 optimized dpi",
      connectivity: "USB 2.0, Ethernet, Wi-Fi Dual Band, RJ-11 Fax ports",
      mobilePrinting: "HP App, Apple AirPrint, Chrome OS, Wi-Fi Direct, Mopria",
      networkCapabilities: "Ethernet & Wireless 802.11a/b/g/n/ac",
      display: "2.7-inch Capacitive Touchscreen",
      processorSpeed: "1.2 GHz",
      memory: "512 MB",
      operatingSystems: "Windows 10/11, macOS 11–14, Linux, Chrome OS, Windows Server",
      paperInput: "250-sheet tray + 35-sheet ADF",
      paperOutput: "60-sheet tray",
      borderlessPrinting: "Yes (up to A4/Letter)",
      mediaTypes: "Plain, Photo, Brochure, Card, Envelope, Matte, Glossy",
      scanResolution: "Up to 1200 dpi (optical)",
      scanFileFormats: "PDF, TIFF, JPEG, PNG, RTF, TXT",
      copySpeedBlack: "Up to 21 cpm",
      copySpeedColor: "Up to 14 cpm",
      faxing: "Yes, color fax supported (4 sec/page)",
      powerConsumption: "5.06W (ready), 1.22W (sleep)",
      energyFeatures: "Auto-On/Off, Schedule On/Off",
      dimensions: "439.3 x 342.5 x 278 mm",
      weight: "9.29 kg",
      color: "Cement",
      inTheBox: "Printer, 4 Setup Ink Cartridges, Power Cord, Setup Poster, Guides",
      cartridges: "4 (Black, Cyan, Magenta, Yellow)"
    }
  },

  {
    id: 7,
    name: "Hp laserjet tank MFP 1602W",
    price: "₦449,185.00",
    newprice: "₦526,500",
    image: laserjet_printer,
    category: "printers",
    specs: {
      functions: "Print, Copy, Scan",
      printSpeedBlack: "Up to 22 ppm (A4, ISO)",
      firstPageOut: "As fast as 8 sec",
      duplexPrinting: "Manual (driver-supported)",
      monthlyDutyCycle: "Up to 25,000 pages",
      recommendedMonthlyVolume: "250–2500 pages",
      printQualityBlack: "Up to 600 x 600 dpi",
      printTechnology: "Laser",
      connectivity: "USB 2.0, Ethernet, Dual-band Wi-Fi (2.4/5GHz)",
      mobilePrinting: "Apple AirPrint, Mopria, HP App, Wi-Fi Direct",
      networkCapabilities: "Built-in Wi-Fi 802.11a/b/g/n",
      display: "Icon LCD",
      processorSpeed: "500 MHz",
      memory: "64 MB SDRAM",
      operatingSystems: "Windows 10/11, macOS 10.15–12, Linux",
      paperInput: "150-sheet tray",
      paperOutput: "100-sheet output",
      mediaTypes: "Plain, Heavy, Bond, Label, Envelope",
      mediaSizes: "A4, A5, A6, B5, C5, DL, Custom (102 x 152 to 215.9 x 355.6 mm)",
      scannerType: "Flatbed (CIS)",
      scanResolution: "Up to 600 dpi (optical)",
      scanFormats: "JPEG, BMP, PNG, TIFF, PDF",
      copySpeedBlack: "Up to 22 cpm",
      powerConsumption: "390W (active), 2.7W (ready), 0.5W (sleep)",
      energyFeatures: "Auto-On/Off, Instant-on Technology",
      ecolabels: "Blue Angel Certified",
      security: "Secure Boot, Firmware Integrity, TLS, Admin Password, Encrypted Data",
      dimensions: "368 x 326 x 255 mm",
      weight: "7.9 kg",
      inTheBox: "Printer, Black Imaging Drum (~5000 pages), Power Cord, Setup Guides",
      cartridges: "1 (Black)"
    }
  },

  {
    id: 4,
    name: "Lenovo ThinkPad X1 carbon gen 12 core ultra 7 14\" 32GB 512GB SSD",
    price: "₦949,232",
    newprice: "₦3,686,280",
    image: thinkpad_laptop,
    category: "laptops",
    specs:{
      "processor": "Intel Core Ultra 7 155U Processor (E-cores up to 3.80 GHz, P-cores up to 4.80 GHz)",
      "operatingSystem": "Windows 11 Pro 64",
      "graphicCard": "Integrated Intel Graphics",
      "memory": "32 GB LPDDR5X-6400MHz (Soldered)",
      "storage": "512 GB SSD M.2 2280 PCIe Gen4 Performance TLC Opal",
      "display": "14\" WUXGA (1920 x 1200), IPS, Anti-Glare, Non-Touch, 100% sRGB, 400 nits, 60Hz, Low Power",
      "camera": "1080P FHD IR+RGB with Privacy Shutter",
      "fingerprintReader": "Fingerprint Reader",
      "pointingDevice": "TrackPad with 3 buttons",
      "keyboard": "Backlit, Black - English (US)",
      "wifi": "Intel Wi-Fi 6E AX211 2x2 AX vPro & Bluetooth 5.1 (Windows 10) or Bluetooth 5.3 (Windows 11)",
      "wwan": "None",
      "warranty": "One Year Onsite",
      "color": "Eclipse black with Classic black top cover"
    }
  },

  {
    id: 3,
    name: "Apple 2018 MacBook pro 15.4\" 16GB 2TB ",
    price: "285,000",
    newprice: "₦2,204,955",
    image: apple_laptop,
    category: "laptops",
    specs:{
      "processor": "2.9GHz 6-core 8th-gen Intel Core i9 Ice Lake processor with Turbo Boost up to 4.8GHz",
      "ram": "16GB 2400MHz DDR4",
      "storage": "2TB SSD",
      "graphics": "Radeon Pro 555X with 4GB Memory",
      "display": "15\" Retina display with True Tone",
      "touchBar": "Touch Bar and Touch ID",
      "color": "Space Gray",
      "keyboard": "Full-size English backlit keyboard",
      "trackpad": "Force Touch trackpad",
      "wifi": "802.11ac Wi-Fi wireless networking (IEEE 802.11a/b/g/n compatible)",
      "bluetooth": "Bluetooth 5.0 wireless technology",
      "camera": "720p FaceTime HD camera",
      "operatingSystem": "macOS"
    }
  },

  {
    id: 6,
    name: "Dell G15 (G5530-7388GRY) 32GB 1TB SSD 15\" ",
    price: "₦185,000",
    newprice: "₦2,587,000",
    image: dell_laptop,
    category: "laptops",
    specs: {
      "processor": "Intel Core i7-13650HX 13th Generation Processor",
      "display": "15.6-inch FHD (1920x1080) Display with Webcam, 120Hz refresh rate",
      "storage": "1TB SSD",
      "ram": "16GB DDR5",
      "graphics": "8GB NVIDIA GeForce RTX 4060",
      "bluetooth": "Yes",
      "color": "Dark Shadow Gray",
      "operatingSystem": "Windows (unspecified)",
      "productLine": "LaptopWarehouse LTD",
      "productionCountry": "China",
      "dimensions": "1920 x 1080 cm",
      "weight": "1.95 kg",
      "mainMaterial": "Fiber",
      "sku": "DE168CL6AA4PYNAFAMZ",
      "whatsInTheBox": "DELL G15 5530 Gaming Laptop, Charger, and User Manual"
    }
  }
  */
]

// Category configuration for display
export const categories = [
  { id: "all", name: "All Products", color: "bg-gray-600" },
  { id: "laptops", name: "Laptops", color: "bg-blue-600" },
  { id: "webcams", name: "Webcams", color: "bg-green-600" },
  { id: "printers", name: "Printers", color: "bg-green-800" },
  { id: "phones", name: "Phones", color: "bg-purple-600" },
  { id: "Inverters", name: "Inverters", color: "bg-red-600" },
  { id: "keyboards", name: "Keyboards", color: "bg-yellow-600" }
]

// Helper function to get category color
export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'laptops': return 'bg-blue-600'
    case 'webcams': return 'bg-green-600'
    case 'printers': return 'bg-green-800'
    case 'phones': return 'bg-purple-600'
    case 'Inverters': return 'bg-red-600'
    case 'keyboards': return 'bg-yellow-600'
    case 'all': return 'bg-gray-600'
    default: return 'bg-gray-600'
  }
}

// Helper function to get category display name
export const getCategoryDisplayName = (category: string) => {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

// Helper function to get first 3 specs for preview
export const getPreviewSpecs = (specs: ProductSpecs) => {
  const specEntries = Object.entries(specs)
  return specEntries.slice(0, 3)
}
