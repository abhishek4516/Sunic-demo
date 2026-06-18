import datastorage from "../assets/datastorage.png";

export const solutions = {
  "rake-number-ocr": {
    title: "Rake Number OCR",
    description: "Automated identification of railway rake numbers using OCR and AI-powered computer vision.",
    videoUrl: "/141056-776768318.mp4",
    benefits: [
      {
        title: "Real-time OCR",
        description: "Instantly reads and processes rake numbers from live camera feeds as trains arrive, eliminating manual logging delays and ensuring data is captured the moment a rake enters the yard.",
      },
      {
        title: "99%+ recognition accuracy",
        description: "Our AI model is trained on thousands of real-world rake number formats, handling poor lighting, motion blur, and weathered surfaces to deliver industry-leading recognition rates.",
      },
      {
        title: "Reduced manual intervention",
        description: "Automates data entry tasks previously handled by on-ground personnel, freeing your team for higher-value operations and significantly cutting human error.",
      },
      {
        title: "ERP integration",
        description: "Seamlessly pushes recognised rake data into your existing ERP, TMS, or logistics platforms via REST APIs, keeping all your systems in sync without custom middleware.",
      },
      {
        title: "24/7 operation",
        description: "The system runs continuously around the clock without fatigue or shift gaps, ensuring every rake movement — day or night — is captured and logged automatically.",
      },
    ],
  },

  "container-number-ocr": {
    title: "Container Number OCR",
    description: "Automatically capture and validate container numbers from cameras in real time.",
    videoUrl: "/141056-776768318.mp4",
    benefits: [
      {
        title: "Fast container processing",
        description: "Captures container numbers in milliseconds as vehicles pass through gate lanes, drastically reducing dwell time and keeping cargo operations moving at full speed.",
      },
      {
        title: "Automatic validation",
        description: "Cross-checks every captured number against ISO 6346 checksum rules and your internal manifest data, instantly flagging mismatches before containers are moved.",
      },
      {
        title: "Operational visibility",
        description: "Every scan event is timestamped and logged to a central dashboard, giving operations managers a live view of container flow across the entire facility.",
      },
      {
        title: "Improved accuracy",
        description: "Eliminates transcription errors that occur with manual entry, ensuring the container IDs in your system precisely match what is physically on the ground.",
      },
    ],
  },

  "container-location-ocr": {
    title: "Container Location + OCR",
    description: "Track container identity and exact location simultaneously using OCR and positioning systems.",
    videoUrl: "/141056-776768318.mp4",
    benefits: [
      {
        title: "Location intelligence",
        description: "Fuses OCR-captured container IDs with precise yard coordinates so you always know not just which container is present, but exactly where it is sitting in the yard.",
      },
      {
        title: "Container traceability",
        description: "Maintains a full movement history for every container — entry point, dwell positions, and exit — creating an auditable trail for customs, clients, and internal compliance.",
      },
      {
        title: "Real-time updates",
        description: "Location and identity data refresh continuously, so your TOS and ERP always reflect the current state of the yard without manual reconciliation runs.",
      },
      {
        title: "Operational visibility",
        description: "Live yard maps overlay container identity on physical positions, helping planners optimise stacking, retrieval sequences, and equipment routing.",
      },
    ],
  },

  "vehicle-number-ocr": {
    title: "Vehicle Number OCR",
    description: "Capture and process vehicle registration numbers automatically.",
    videoUrl: "/vocr_detailed.mp4",
    benefits: [
      {
        title: "Gate automation",
        description: "Reads registration plates at entry and exit points in real time, triggering barrier lifts automatically for authorised vehicles and removing the need for manual guard checks.",
      },
      {
        title: "Vehicle tracking",
        description: "Logs every vehicle movement across your facility, building a time-stamped record of arrivals, turnaround times, and departures for operational and security review.",
      },
      {
        title: "Reduced delays",
        description: "Eliminates queues caused by manual verification — vehicles with valid registrations clear the gate in seconds, improving throughput during peak hours.",
      },
      {
        title: "Digital records",
        description: "All captures are stored as searchable digital records with plate image, timestamp, and matched booking data, replacing paper registers and manual spreadsheets.",
      },
    ],
  },

  "face-recognition-extraction": {
    title: "Face Recognition & Extraction",
    description: "AI-powered face recognition for access control, workforce management and security monitoring.",
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    benefits: [
      {
        title: "Biometric authentication",
        description: "Verifies worker and visitor identity using facial biometrics rather than cards or PINs, eliminating buddy-punching, lost credentials, and unauthorised access attempts.",
      },
      {
        title: "Improved security",
        description: "Continuously monitors entry points and restricted zones, alerting security personnel in real time when an unrecognised or blacklisted individual is detected.",
      },
      {
        title: "Access control",
        description: "Grants or denies access to specific areas based on role-based facial identity profiles, ensuring only authorised personnel enter sensitive operational zones.",
      },
      {
        title: "Attendance automation",
        description: "Automatically logs check-in and check-out times from camera feeds, integrating directly with your HR and payroll systems to eliminate manual attendance sheets.",
      },
    ],
  },

  "gps-location-of-container": {
    title: "GPS Location of Container",
    description: "Monitor container movement and location continuously through integrated GPS tracking systems.",
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    benefits: [
      {
        title: "Live location visibility",
        description: "Streams real-time GPS coordinates for every tagged container to a central map view, giving dispatchers and clients instant visibility into where each asset is at any moment.",
      },
      {
        title: "Route monitoring",
        description: "Records the full journey path of containers in transit, enabling route compliance checks, deviation alerts, and post-trip analysis to optimise future movements.",
      },
      {
        title: "Asset tracking",
        description: "Maintains an always-current inventory of container positions across multiple depots and yards, reducing time lost searching for misplaced or unreturned assets.",
      },
      {
        title: "Reduced losses",
        description: "Geo-fence alerts notify operations teams the moment a container moves outside an approved boundary, enabling rapid response to theft or unauthorised movement.",
      },
    ],
  },

  "gate-operation-automation": {
    title: "Gate Operation Automation",
    description: "Automate gate verification, vehicle validation and entry/exit processes with intelligent workflows.",
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    benefits: [
      {
        title: "Faster gate processing",
        description: "Combines OCR, face recognition, and booking validation into a single automated gate workflow, clearing vehicles in seconds instead of minutes and eliminating bottlenecks.",
      },
      {
        title: "Reduced manpower",
        description: "Replaces manual gate staff duties with intelligent automation, allowing your team to be redeployed to higher-value tasks while maintaining consistent gate performance.",
      },
      {
        title: "Improved security",
        description: "Every entry and exit is validated against pre-approved booking and identity data, ensuring only authorised vehicles and personnel gain access to the facility.",
      },
      {
        title: "Digital audit trails",
        description: "Generates an immutable, time-stamped log of every gate event including images, vehicle data, and operator actions — ready for audits, disputes, or compliance reporting.",
      },
    ],
  },

  "warehouse-management": {
    title: "Warehouse Management",
    description: "Comprehensive warehouse management solutions covering inventory, movement and operational visibility.",
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    benefits: [
      {
        title: "Inventory control",
        description: "Maintains accurate, real-time stock counts across all warehouse zones using barcode, RFID, and vision-based tracking — reducing shrinkage and eliminating stock discrepancies.",
      },
      {
        title: "Process optimisation",
        description: "Analyses inbound, storage, and outbound workflows to identify bottlenecks and recommends layout and process changes that improve pick rates and reduce handling time.",
      },
      {
        title: "Live monitoring",
        description: "Dashboards give warehouse managers a live view of stock levels, pending orders, equipment utilisation, and worker productivity from a single interface.",
      },
      {
        title: "Warehouse automation",
        description: "Integrates with conveyor systems, AGVs, and robotic pickers to orchestrate automated goods movement, minimising manual handling and accelerating order fulfilment.",
      },
    ],
  },

  "custom-infra-setup": {
    title: "Custom Infra Setup",
    description: "Design and deployment of tailored IT infrastructure solutions built around operational requirements.",
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    benefits: [
      {
        title: "Scalable architecture",
        description: "Infrastructure is designed from the ground up to scale horizontally as your operations grow, ensuring performance never degrades as data volumes and user counts increase.",
      },
      {
        title: "Custom deployment",
        description: "Every environment is tailored to your specific operational context — on-premise, cloud, or hybrid — with hardware and software choices aligned to your workload requirements.",
      },
      {
        title: "High availability",
        description: "Redundant systems, failover configurations, and proactive monitoring ensure your critical infrastructure stays online even during hardware failures or maintenance windows.",
      },
      {
        title: "Future-ready systems",
        description: "Architectures are built with modular, open standards so new capabilities — AI, IoT, edge compute — can be integrated without requiring a full infrastructure overhaul.",
      },
    ],
  },

  "data-storage-solutions": {
    title: "Data Storage Solutions",
    description: "Secure and scalable storage platforms for enterprise applications and operational data.",
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    benefits: [
      {
        title: "Data redundancy",
        description: "Implements RAID configurations, cross-site replication, and automated backups so your data is protected against drive failures, corruption, and accidental deletion.",
      },
      {
        title: "High-speed access",
        description: "NVMe and SSD-tiered storage architectures deliver low-latency read/write performance for demanding applications, databases, and real-time analytics workloads.",
      },
      {
        title: "Scalable storage",
        description: "Storage pools expand non-disruptively as your data grows — adding capacity without downtime or data migration, keeping operational continuity intact.",
      },
      {
        title: "Business continuity",
        description: "Disaster recovery configurations and RTO/RPO-aligned backup policies ensure your organisation can recover quickly from any data loss event with minimal disruption.",
      },
    ],
  },

  "data-centre-solutions": {
    title: "Data Centre Solutions",
    description: "End-to-end data centre infrastructure including compute, networking, cooling and power systems.",
    videoUrl: "https://cdn.pixabay.com/video/2022/03/14/110926-690507276_large.mp4",
    benefits: [
      {
        title: "Enterprise reliability",
        description: "Built to Tier III/IV standards with fully redundant power, cooling, and networking paths, ensuring your data centre meets the availability demands of mission-critical workloads.",
      },
      {
        title: "High uptime",
        description: "N+1 and 2N redundancy across all critical systems, combined with 24/7 remote monitoring and rapid on-site response, delivers consistent uptime above 99.99%.",
      },
      {
        title: "Scalable compute",
        description: "Modular server and networking deployments allow compute capacity to be expanded in line with business growth, without full facility redesigns or prolonged downtime.",
      },
      {
        title: "Infrastructure management",
        description: "Centralised DCIM tooling provides real-time visibility into power usage, thermal performance, and asset inventory, enabling proactive management and capacity planning.",
      },
    ],
  },
};