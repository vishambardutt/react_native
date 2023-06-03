import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View,Text, ScrollView,StyleSheet,Image,StatusBar,} from 'react-native'
const PlaceholderImage = require('../assets/about-vishambardutt.png');
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Define your screen components
const Vishambar = () => (
  <ScrollView>
     <View style={styles.profileImgContainer}>
     
        <Image source={PlaceholderImage} style={styles.profileImg} />
       
      
      <StatusBar style="auto" />
      
    </View>
    <View >
     <Text style={styles.name}>Vishambar Dutt</Text>
    </View>
    <View >
     <Text style={styles.get}>GET IN TOUCH WITH</Text>
    </View>
    <View style={styles.esec}>
<Text style={styles.email}>Email: vishambardj@yahoo.com</Text>
<Text style={styles.email}>Mobile: +91-9891559800</Text>
<Text style={styles.email}>Skype: vishambardj</Text>
<Text style={styles.email}>Linkedin: https://linkedin.com/vishambarjakhmola</Text>
    </View>
   
  </ScrollView>
);
const AboutMe = () => (
  <ScrollView>
    <View><Text style={styles.dt}>ABOUT ME</Text>
    <Text style={styles.noarmalText}>Skilled UI Developer adept at reducing the amount of work required of end users to navigate website, software. Sound experience at designing interfaces that create the best liaisons between user and application through functions that minimize reaching a goal. Extensive experience in Web Technologies, who enjoys being part of, as well as leading, a successful and productive team? Able to work well on his own initiative and can demonstrate the high level of motivation required to meet the heights of deadlines. Even under significant pressure, possesses a strong ability to perform effectively.

    Execute, and finalize projects according to strict deadlines and within budget.</Text>
    </View>
  </ScrollView>
);

const Skills = () => (
  <ScrollView>
    <View style={styles.skv}>
     <Text style={styles.mainHeading}>TECHNICAL SKILLS:</Text>
       <Text style={styles.dt} >Web technologies:</Text>
       <Text style={styles.noarmalText}> HTML5, CSS3, Bootstrap, JavaScript, es6, Reactjs, Nextjs, React Native,Photoshop, Illustrator, InDesign, CorelDRAW.
</Text>
<Text style={styles.mainHeading}>CMS:</Text>
<Text style={styles.noarmalText}> WordPress, WooCommerce.</Text>
<Text style={styles.mainHeading}>Developer Tools:</Text>
<Text style={styles.noarmalText}> Visual Studio Code, Notepad ++, Edit plus.
</Text>
    </View>
  </ScrollView>
);
const Experience = () => (
      <ScrollView>
        <View>
          <Text style={styles.tophead}>
          RECENT EXPERIENCES</Text>
<Text style={styles.noarmalText}>Currently working as a freelancer UI/UX Developer.</Text>
<Text style={styles.tophead}>Sr. UI/UX Expert</Text>
<Text style={styles.dt}>Avaal Technologies Pvt. Ltd.</Text>
<Text style={styles.coname}>  December 2020    December 2021, Gurgaon</Text>
<Text style={styles.response}>Role & Responsibilities</Text>
<Text style={styles.noarmalText}  >Gathering and evaluating user requirements, in collaboration with product managers. work with marketing, product management and development leaders to create solutions. Help to set and document the vision for the user experience, serving as a client advocate to ensure the highest level of usefulness, desirability and client satisfaction.  </Text>
</View>
<View>
  <Text style={styles.tophead}>Sr. Web Developer</Text>
<Text style={styles.dt}>Softenger India Pvt Ltd.</Text>
<Text style={styles.coname}>  May 2019    September 2020, Gurgaon</Text>
<Text style={styles.response}>Role & Responsibilities</Text>

<Text style={styles.noarmalText}>•	Create web application front end as per design comps and information architecture.</Text>

<Text style={styles.noarmalText}>•	Integrate application front end with application business layer.</Text>

<Text style={styles.noarmalText}>•	Follow best practices and standards for accessibility and cross browser compatibility.</Text>

<Text style={styles.noarmalText}>•	Collect feedback from design and technical staff on website development needs.</Text>

<Text style={styles.noarmalText}>•	Understand executing accessibility and progressive enhancement presentation.</Text>

<Text style={styles.noarmalText}>•	Stick to established coding standards and group procedures individually and in teams.</Text>

<Text style={styles.noarmalText}>	Coordinate with Interface Design Architects for meeting accessibility standards at code level.</Text>

<Text style={styles.noarmalText}>•	Create conceptual diagrams, visual mockups and manage detailed user interface specifications.</Text>

<Text style={styles.noarmalText}>•	Conduct Usability Testing to resolve interface problems.</Text>
</View>


<View>
<Text style={styles.tophead}>     Sr. Web Developer</Text>
<Text style={styles.dt}>REMAX Millennium Canada</Text>
<Text style={styles.coname}> October 2018    May 2019, Ghaziabad</Text>

<Text style={styles.response}>Role & Responsibilities</Text>
<Text style={styles.noarmalText}>Develop websites from scratch, as per the designs provided from your Project Manager in Canada. Complete required work with minimal errors within time-frames set out by Project Manager.</Text>

<Text style={styles.noarmalText}> Validate functional requirements of each project and provide key recommendations.</Text>
<Text style={styles.noarmalText}>Positively accept constructive feedback from Project Manager and implement solutions to effectively action against feedback.</Text>
<Text style={styles.noarmalText}>Stay up to date with the latest technology and software to keep ahead of website development trends, designs and changes.</Text></View>

<View>
<Text style={styles.tophead}>Sr. Web Developer</Text>
<Text style={styles.dt}>Amani Group</Text>
<Text style={styles.coname}>October 2017    August 2018 Ahmedabad</Text>

<Text style={styles.response}>Role & Responsibilities</Text>
<Text style={styles.noarmalText}>Gather & evaluate use requirements in collaboration with product managers and engineers. Illustrator design ideas process flows and site map.
Design graphic user interface elements.</Text>

<Text style={styles.noarmalText}>Build navigation buttons and search field's text fields etc.</Text>
<Text style={styles.noarmalText}>Develop UI mockups and prototypes that clearly illustrate how site look like.</Text>
<Text style={styles.noarmalText}>Create graphic images, prepare and present rough drafts with team or stakeholders.</Text>
<Text style={styles.noarmalText}>Identify and troubleshoots UX problems responsiveness.</Text>
<Text style={styles.noarmalText}>Conduct layout adjustment based on use friendly and feedback given by team.</Text>
<Text style={styles.noarmalText}>Adhere to style standards on fonts, colors and images.</Text>
<Text style={styles.noarmalText}>Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.</Text>
<Text style={styles.noarmalText}>Facilitate the client's product vision by researching, conceiving, sketching, prototyping and user-testing experiences for digital products.</Text>
<Text style={styles.noarmalText}>Design and deliver wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces.</Text>
<Text style={styles.noarmalText}>Identify design problems and devise elegant solutions.</Text>
<Text style={styles.noarmalText}>Make strategic design and user-experience decisions related to core, and new, functions and features.</Text></View>

<View>
<Text style={styles.tophead}>  Web Developer</Text>
<Text style={styles.dt}> Map Asia</Text>
<Text style={styles.coname}> August 2017    October 2017  Coimbatore</Text>

<Text style={styles.response}>Role & Responsibilities</Text>
<Text style={styles.noarmalText}>Responsible for the coding, design and layout of a website according to a company's specifications.  As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming. </Text>
<Text style={styles.noarmalText}>•	Writing efficient code</Text>
<Text style={styles.noarmalText} >•	Creating websites/a website using standard HTML/CSS practices</Text>
<Text style={styles.noarmalText} >•	Working closely with web designers and programmers to produce the website</Text>
<Text style={styles.noarmalText} >•	Constant communication with other colleagues in the business to develop and deploy their content and ensuring there is a clear establishment of what can be created within what timeframe</Text>
<Text style={styles.noarmalText}>•	Maintaining and expanding/enhancing the website once built.</Text></View>

<View>
<Text style={styles.tophead}>Sr. UI Developer</Text>
<Text style={styles.dt}>Jconnect Infotech Pvt. Ltd.</Text>
<Text style={styles.coname}> August 2015    August 2017,  Noida</Text>

<Text style={styles.noarmalText}>Jconnect is a Noida-based Web Development Company in India specialized in delivering quality, cost effective, user friendly and result-oriented web designing, website development and e-commerce and online marketing (SEO and SEM) solutions for a global clientele. Our professional, creative and expert designing team guided by customer centric approach helps you turn your website in a sales engine.</Text></View>

<View>
      <Text style={styles.tophead}>Design Head</Text>
      <Text style={styles.dt}>W3website</Text>
      <Text style={styles.coname}>July 2012   August 2015,  Ghaziabad </Text> 

      <Text style={styles.noarmalText}>W3website is web designing company offering high quality and affordable services within stipulated time period. Our wide range of IT services include web designing and development, graphic designing, ecommerce solutions, internet marketing, corporate branding and other related services. We are a team of highly qualified, experienced and dedicated professionals.</Text>
      </View>

<View>
      <Text style={styles.tophead}>Project Manager</Text>
      <Text style={styles.dt}>Indiafin Technologies Ltd.</Text>
<Text style={styles.coname}>January 2011     July 2012,  Noida </Text>

<Text style={styles.noarmalText}>Indiafin brings Nine years of expertise to your project and guides you through the whole process. No doubt we'll go beyond the brief too.
As you'd expect from a company with industry best practice, we possess a wealth of knowledge in the Web, Data Conversion and BPO. We bring together technology, creativity and a practical appreciation of business objectives to deliver online solutions within a framework of commercial constraints. In a word, we make your online presence work. By specializing in these key areas, we maximize the value provided to our clients through the combination of a high level of domain knowledge and the ability to implement proven technical solutions. Our solutions are mainly focused on enabling our clients to achieve their business objectives by using technology. We have served many clients from different fields and have satisfied those clients through our services.
</Text>
<Text style={styles.response}>Role & Responsibilities </Text>
<Text style={styles.noarmalText}>
Sets the budget, scope, and timeline for digital projects.</Text>
<Text style={styles.noarmalText}>Creates deadlines and action items for every project team member.</Text>
<Text style={styles.noarmalText}>Leads daily or weekly project team meetings to review progress.</Text>
<Text style={styles.noarmalText}>Writes project status reports for the team and key executives.</Text>
<Text style={styles.noarmalText}>Addresses bottlenecks and adjusts the timeline and deliverables.</Text>
<Text style={styles.noarmalText}>Works with team members individually to resolve any issues.</Text>
<Text style={styles.noarmalText}>Hosts project recap meetings to gather team feedback.</Text>
<Text style={styles.noarmalText}>Helps present the final website or app project to executives. </Text></View>

<View>
      <Text style={styles.tophead}>Web Designer</Text>
<Text style={styles.dt} >Aksh Optifibre Ltd. (IPTV)</Text>
<Text style={styles.coname}>  July 2009      January 2011,   Delhi</Text>

  <Text style={styles.noarmalText}>In this era of technology, Aksh Optifibre (IPTV) has dedicated itself in building a team to create products that talks the future.
Our solutions will help you get ready for the future and reach for the skies! Starting from High- Speed Internet Access to cloud-based solutions that are accessible through multiple devices, we cater to the world that is ever changing and constantly mobile.
Holding the vision to connect businesses with their customers through technology, we fabricate from the delicate to the most complex solutions through our innovative products.</Text></View>

<View>
  <Text style={styles.tophead}>Ecommerce Web Template Designer</Text>
<Text style={styles.dt}>Times Internet Limited (The Times of India)</Text>
<Text style={styles.coname}> Nov 2004    June 2009, Gurgaon</Text>

<Text style={styles.noarmalText}> Times Internet is the largest Indian Internet Network and the digital venture of Times of India, India's largest media and entertainment group. TIL websites are among the fastest growing Web/Mobile based networks worldwide. Since its inception in 1999, Times Internet has led the Internet revolution in India and has emerged as India's foremost web entity, running diverse portals and niche websites.</Text>
<Text style={styles.noarmalText}>It reaches over 232 million unique visitors a month who collectively account for 10.4 billion page views and 10.0 billion minutes spent across web and mobile, with businesses across news, entertainment, sports, local, ecommerce, classifieds, startup investments, local partnerships, and more. Today, it has a diversified set of 35+ digital consumer-facing businesses.</Text></View>

      
      </ScrollView>
    );
// Create your tab navigator component
const TabNavigator = () => (
  <Tab.Navigator>
     <Tab.Screen name="UI DEVELOPER" component={Vishambar} />
    <Tab.Screen name="ABOUT" component={AboutMe} />
    <Tab.Screen name="SKILLS" component={Skills} />
    <Tab.Screen name="EXPERIENCE" component={Experience} />
  </Tab.Navigator>
);
const styles = StyleSheet.create({
esec:{
  backgroundColor:'#00C4FF',

},
email:{fontSize:18,
  fontWeight:400,
  color:'#ffffff',
  padding:10,
},
  profileImgContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#30A2FF',
    padding:30,
  },
  profileImg: {
    height: 180,
    width: 180,
    borderRadius: 100,
  },
  name:{
    backgroundColor:'#213555',
    fontSize:20,
    padding:20,
    fontWeight:500,
    color:'#ffffff',
    textAlign:'center',
    textTransform:'uppercase',
   
  },
  get:{backgroundColor:'#27374D',
  fontSize:20,
    padding:20,
    fontWeight:500,
    color:'#ffffff',
    textAlign:'center',
    marginTop:3,
    
  },
    vis:{
    backgroundColor:'#30A2FF',
  },
  dt:{
    backgroundColor:'#30A2FF',
    color:'#ffffff',
    padding:10,
    fontSize:20,
    fontWeight:600,
  },
  noarmalText:{
    padding:10,
    fontSize:20,
    color:'#212A3E',
    textAlign:'justify',
    fontWeight:300,
    backgroundColor:'#F9F5F6',
    fontFamily: 'Raleway',
  },
  mainHeading:{fontSize:20,
    fontWeight:500,
    color:'#213555'

  },
  response:{
    padding:10,
    fontSize:19,
    fontWeight:300,
    backgroundColor:'#00C4FF',
  },
  skv:{
    padding:20,
  },
  tophead:{
    fontSize:20,
    color:'#ffffff',
    padding:10,
    fontWeight:600,
    backgroundColor:'#0B2447',
  },
  coname:{
    fontSize:20,
    fontWeight:300,
    color:'#0B2447',
    padding:10,
  },
  headtext:{
        fontSize:20,
        color:'#000000',
        textAlign:'center',
        alignItems:'center',
        padding:10,
  },
      abttext:{
            textAlign:'justify',
            fontSize:15,
            padding:10,
            color:'#27374D',
      },
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
        paddingTop: 58,
      },
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
    });
export default TabNavigator;
