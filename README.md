# MVP Workshop - Fossil Free Future - Create The Key Enabler For Energy Transition

# Odyssey Hackathon Impact Canvas

## Key Elements

### Problem Analysis
* Verification and cerfitication of small-scale green energy producers
* Eliminating grey energy trading on the green energy market

### Solution
Public web dashboard allowing small-scale green energy producers to register their location, manage all their PV devices from one place and tracking all green energy outputs.

Decentralized platform allowing validators to certificate new small-scale green energy producers, vote on adding new PV devices with all parameters to the blockchain, monitor the network and the cheating risk associated to each output, re-send risky location to certification queue, vote on granting access to the new validator or revoking access to the existing one.

### Minimum Viable Product 
_Prototype at end of Hackathon_

Architecture (PoC):
1. **Blockchain:**
* Parity PoA network
* Smart Contract - Validator, Green device, households and 3rd party data providers- proposing, voting, removing
2. **Backend:**
* Gathering data from validated 3rd party data providers 
* Data from energy input - store and process data (MySQL)
* Validating proposed data by households (rule-engine ML)
* Handling communication with Frontend and Blockchain

3. **Frontend:**
* Public Dashboard - Used by Public users
* Private Dashboard - Used by Validators

#### Public Dashboard 
![Public Dashboard Home Screen]("https://lh6.googleusercontent.com/h_JMA5J6inWbA-aPXrE6CZ9i5tYxZyfV303GQj4uSAUz2zb33vmWB7zUHJahkiQy7jtbf6elLvUBorNAk2cs=w3360-h1896-rw")

### X-factor 
_Why a game changer_

### Large Scale Adoption 
_Which ecosystems approach and trends make your solution likely to fly?_

## Impact

### Impact on User
Enabling small-scale green energy producers to feed their energy into the system and monitor their earnings.

Incentives for Users:
* No extra costs
* Monitor earnings
* Transparent and fair system

### Impact on User-Context 
_Industry and Stakeholders_
* Delegated authority to governments, universities, national energy companies - validators representing MID (mediator of individual data)
* Transparent and fair system
* Enabling new business models 

### Impact on Society 
* Incentivizing green energy production by enabling small-scale producers to enter the system
* Eliminating grey energy trading on the green energy market

## Essential Details

### Code Validation

### Legal Arrangements

### Open Source Strategy

### Interconnectedness

## Incubation Plan 

### Milestones Now Achieved 
_Team and stakeholders_

### Milestones Up Ahead 
_Team and stakeholders_

### 100 days target
_SMART goals_

# User Stories
* As a Validator ISBAT propose new validator that should enter the system by providing the name, last name, email 
* As a Validator ISBAT accept or reject request for the new validator - ⅔ of votes is needed for accepting request
* As a Validator ISBAT propose revoking access for another validator
* As a Validator ISBAT accept or reject request for revoking access of another validator - ⅔ of votes is needed for accepting request
* As a Validator ISBAT propose adding new green device producer to the system by providing Producer, Model and Maximum Output
* As a Validator ISBAT accept or reject new device - ⅔ of votes is needed for accepting request
* As a Validator ISBAT see all green energy outputs and recheck the “risky” outputs by marking them for re-validation process 
* As a User ISBAT register my house by providing geo location and adding all green devices that I have installed 
* As a User ISBAT add new green device or remove the existing one
* As a User ISBAT see all green energy outputs

