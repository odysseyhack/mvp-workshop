# Certify.Energy - Odyssey Hackathon Impact Canvas

## Key Elements

### Problem Analysis
_Verification and certification of small-scale green energy producers_

* There is no way for small-scale green energy producers to validate the energy they produce
  * There are no enough incentives for them to register 
  * Only 30% of households with PV devices in Netherlands are actually registered
* There is no way to prove that the energy going to the grid is green, thus resulting with "green-washing" - grey energy trading on the green energy market

### Solution

__Public web dashboard__ allowing small-scale green energy producers to: 
* Register their location 
* Manage all their PV devices from one place
* Track all green energy outputs

__Decentralized validators platform__ allowing authorities to propose and achieve consensus on:
* Certification of new small-scale green energy producers by:
  * Processing requests for new locations coming from the Public web dashboard
  * Monitoring the network
  * Detecting potential frauds by calculating the risk associated to each output
  * Re-sending risky location to the certification queue 
  * Detecting potential producers which are not certified in the system, but their smart meters show similar patterns as the ones which are already certified 
* Adding new PV devices with all needed parameters to the blockchain
* Granting access to the new validator or revoking access to the existing one 
* Adding a new credible third-party source of information (such as the weather provider API)

### Minimum Viable Product 
_Prototype at end of Hackathon_

#### Architecture (PoC)

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

![Public Dashboard Home Screen](/screenshots/1_Home.png)

![Public Dashboard My Installations](/screenshots/2_MyInstallations.png)

![Public Dashboard Explore](/screenshots/3_Explore.png)

#### Validators Dashboard 

![Validators Dashboard Home Screen](/screenshots/1_AllRequests.png)

![Validators Dashboard Request More Details](/screenshots/1.1_MoreDetails.png)

![Validators Dashboard Devices](/screenshots/2_Devices.png)

![Validators Dashboard Locations](/screenshots/3_Locations.png)

### X-factor 
_Why a game changer_

There are two possible approaches in resolving this problem:
1. The bottom up approach 
> Building the network by validating all individual locations and ensuring that the energy which comes from these locations is green and meets all criteria.


2. The top down approach - Big data analysis 
> Since we know that only 30% of households with PV devices are actually registered in the system, we can take all smart meters data, and try to find similar correlations and predict which locations might also have PV devices, but are not registered yet.

The solution that we are building combines these two approaches.

### Large Scale Adoption 
_Which ecosystems approach and trends make your solution likely to fly?_

* PoA Beacon chain with state transition functions (InterBlockchainCommunication protocol, Polkadot like)
* Shared security based sidechain where small house providers could submit their tx. On every period ends (1day or 7days or 1month) state transaction is called and validator committee (pseudo randomly chosen number validators that is drastically smaller than the actual number of validators)
* Merkel Root tree hash is stored for every single household as proof of validation of previous data. After household sidechain submits their state transition function validator committees are executing tx to verify if Merkle root (provided by household sidechain in state transition function) is right.
* Sidechain are optional, if households are willing to use centralized platform.

## Impact

### Impact on User
Enabling small-scale green energy producers to feed their energy into the system and monitor their earnings.

Incentives for Users:
* **No extra costs**
* **Financial benefits**
* **Monitor earnings** or cost deductions
* **Transparent** and fair system

### Impact on User-Context 
_Industry and Stakeholders_
* Validation of the **green energy** entering the system
* Capitalizing on the existing **(big) data**
* **Delegated authority** to governments, grid operators, universities - validators representing MID (mediator of individual data)
* **Transparent** and fair system
* Enabling **new business models** and incentives for the end user

### Impact on Society 
* Incentivizing **wide adoption** of the green energy production by enabling small-scale producers to enter the system
* Eliminating **"green-washing"** - grey energy trading on the green energy market
* Empowering big players to invent new **sustainable / socially responsible business models**

## Essential Details

### Code Validation

### Legal Arrangements
Certify.Energy owns Public Web Dashboard, which is the only touchpoint for the end-users
* We only ask for location (no other private information exposed) and devices
* System could ask for KYC/AML process in the future if we want to extend incentives for users (for example tax deduction)
* No private data stored on the blockchain, ever
* GDPR compliant
  * Validators need to be in Europe
  * User needs to agree that validators can see data
  * User can see location range for other households, there is no exposure of the exact location
  * Standard Contractrual Clauses (EU Model Clauses) signed by each non-EU validator, users are informed about it

### Open Source Strategy

Certify.Energy is fully open sourced project, which is important for various reasons:

> The freedom to run the program as you wish, for any purpose (freedom 0).

We aim to solve real problem, but we are not able to do it alone. Building a protocol which will be widely adopted at the global level requires complete trust, government support and community formed around it that will work on all pieces which will take us closer to define needed standards.

> The freedom to study how the program works, and change it so it does your computing as you wish (freedom 1). Access to the source code is a precondition for this.

Big industry players will be able to develop their tools and APIs 

> The freedom to redistribute copies so you can help others (freedom 2).
> The freedom to distribute copies of your modified versions to others (freedom 3). By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this.

The platform will serve as a reliable foundation for many other applications in the renewable energy industry (such as P2P energy trading).

### Interconnectedness
* Open Source strategy for faster standardization of third party data
* Chosen technology stack can be relatively easily connected with other blockchains
* Compliant with all standards

## Incubation Plan 

### Milestones Now Achieved 

#### User Stories
- [x] As a Validator ISBAT propose new validator that should enter the system by providing the name, last name, email 
- [x] As a Validator ISBAT accept or reject request for the new validator - ⅔ of votes is needed for accepting request
- [x] As a Validator ISBAT propose revoking access for another validator
- [x] As a Validator ISBAT accept or reject request for revoking access of another validator - ⅔ of votes is needed for accepting request
- [x] As a Validator ISBAT propose adding new green device producer to the system by providing Producer, Model and Maximum Output
- [x] As a Validator ISBAT accept or reject new device - ⅔ of votes is needed for accepting request
- [x] As a Validator ISBAT see all green energy outputs and recheck the “risky” outputs by marking them for re-validation process 
- [x] As a User ISBAT register my house by providing geo location and adding all green devices that I have installed 
- [x] As a User ISBAT add new green device or remove the existing one
- [x] As a User ISBAT see all green energy outputs

### Milestones Up Ahead

#### Business & Product
* __Establish deversified and credible network of validators__ - At least 9 validators consisted of governments, grid operators, universities in __the first three months__.
* __Form industry council for setting the proposed protocol standards of data__ - Include producers covering in total at least 50% of the industry market share in Europe in __the first three months__.
* __EU / Government partnerships for setting up the proper incentives__ - Establishing a working group in __the first three months__, propose a strategy for incentives in __the first year__.

#### Tech
* PoA Beacon chain - Q1
* Mobile App - Q1
* ML training model (combining top down and bottom up approaches) - Q1/Q2
* Shared security based sidechain - Q2/Q3
* Merkel Root tree hash structure - Q2/Q3
* Third party data providers - Q3
* API integration for PV devices - Q3

### 100 days target
_SMART goals_

#### Timeline

Week #1-2 					| Month #1 			| Month #2 			| Month #3
------------ 				| ------------- 	| ------------- 	| -------------
Form a team 				| Governance on chain 	| Mobile App (Public)	| Mobile App (Validators)
Product Discovery Workshop 	| Enable protocol to communicate with other chains 	| Isolation forest implementation 	| Isolation forest training data
UX Design 					|  	| One class SVM implementation  	| One class SVM training data

#### Risky Assumptions - Hypothesis to validate
* Are we able to gather top industry players together to set standards
* Are we able to find data paterns and train the system to predict locations which should be registered
* Are we able to incentivize more people to enter the system, are financial benefits enough 

#### Resources

##### Team
* Product Team - 6 people team, engaged full time, consisted of: 
  * Four Full Stack Developers 
  * Product Designer 
  * Product Manager 
* Domain / Industry Experts (from Vattenfall and MVP Workshop)
  * Product Owner (Vattenfall) - Full Time engagement
  * Tech Architecture - Weekly consulting
  * Legal Expert (Vattenfall) - Bi-weekly consulting
* Marketing & PR
  * Outsource agency (or dedicated people from Vattenfall)
* Business Development / Partnership
  * Dedicated people from Vattenfall

##### Knowledge
* Data format for different manufacturers
* Industry protocols and standards - Minimum set of information needed for the system

##### Budget
* Product Design & Development - 24.000 € / month
* Marketing - 5.000 € / month
* Business Development / Partnership - 10.000 € / month (includes travels)

# Team Deliverable 4 - online questionnaire

## Problem/case (problem analysis)
_Please describe the problem you are solving_
* There is no way for small-scale green energy producers to validate the energy they produce
* There are no enough incentives for them to register 
> Only 30% of households with PV devices in Netherlands are actually registered
* There is no way to prove that the energy going to the grid is green, thus resulting with "green-washing" - grey energy trading on the green energy market

## Solution 
_What did you make and why is this a game-changer?_ 

__Public web dashboard__ allowing small-scale green energy producers to: 
* Register their location 
* Manage all their PV devices from one place
* Track all green energy outputs

__Decentralized validators platform__ allowing authorities to propose and achieve consensus on:
* Certification of new small-scale green energy producers by:
  * Processing requests for new locations coming from the Public web dashboard
  * Monitoring the network
  * Detecting potential frauds by calculating the risk associated to each output
  * Re-sending risky location to the certification queue 
  * Detecting potential producers which are not certified in the system, but their smart meters show similar patterns as the ones which are already certified 
* Adding new PV devices with all needed parameters to the blockchain
* Granting access to the new validator or revoking access to the existing one 
* Adding a new credible third-party source of information (such as the weather provider API)

_Why is this a game-changer?_ There are two possible approaches in resolving previously described problems:
1. The bottom up approach 
> Building the network by validating all individual locations and ensuring that the energy which comes from these locations is green and meets all criteria.

2. The top down approach - Big data analysis 
> Since we know that only 30% of households with PV devices are actually registered in the system, we can take all historical smart meters data, and try to find similar correlations and predict which locations might also have PV devices, but are not registered yet.

The solution that we are building combines these two approaches.

## Technology Impact
_How does blockchain, AI or another tech used by you make a difference here? Clearly explain why this result was not possible with any other technology or a simple database._

Private Blockchain / Delegated Proof of Authority gives the validators role to the committee, not an individual. In that way, the system is decentralized, reliable and transparent, without harming privacy, while sidechains bring efficiency to it.

Machine Learning enables finding patterns and detect uncertified locations which produce green energy by connecting what we know (previously certified locations) and remaining set of Big Data.
