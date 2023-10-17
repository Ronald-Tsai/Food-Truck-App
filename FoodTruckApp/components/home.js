import * as React from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Home( {navigation} ){
    return (
      <View style={styles.container}> 
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
    		<View style={styles.home}>
      			<View style={styles.pizzaGuys}>
        				<View style={styles.pizzaguys}/>
        				<ImageBackground style={styles.headpizzaguys} source={require('/assets/home/pics/headpizzaguys.png')}/>
        				<View style={styles.group18170}>
          					<View style={styles.group18172}>
            						<Text style={styles._1miles}>
              							{`0.1 miles`}
            						</Text>
            						<View style={styles.frame}>
<Svg style={styles.vector} width="4" height="8" viewBox="0 0 4 8" fill="none" >
<Path d="M2 7.5L2.5 6.5V3.929C3.3605 3.7055 4 2.929 4 2C4 0.897 3.103 0 2 0C0.897 0 0 0.897 0 2C0 2.929 0.6395 3.7055 1.5 3.929V6.5L2 7.5ZM1 2C1 1.4485 1.4485 1 2 1C2.5515 1 3 1.4485 3 2C3 2.5515 2.5515 3 2 3C1.4485 3 1 2.5515 1 2Z" fill="#9E2A2B"/>
</Svg>

<Svg style={styles._vector} width="10" height="6" viewBox="0 0 10 6" fill="none" >
<Path d="M7.1335 0.281506L6.867 1.24551C8.1625 1.60351 9 2.29201 9 3.00001C9 3.94601 7.3575 5.00001 5 5.00001C2.6425 5.00001 1 3.94601 1 3.00001C1 2.29201 1.8375 1.60351 3.1335 1.24501L2.867 0.281006C1.0985 0.770006 0 1.81151 0 3.00001C0 4.68201 2.1965 6.00001 5 6.00001C7.8035 6.00001 10 4.68201 10 3.00001C10 1.81151 8.9015 0.770006 7.1335 0.281506Z" fill="#9E2A2B"/>
</Svg>

            						</View>
          					</View>
          					<Text style={styles._pizzaGuys}>
            						{`Pizza Guys`}
          					</Text>
          					<View style={styles.frame6}>
            						<Text style={styles.twobrothersmakingthecrispiestanduniquepizzasinthecityreadytogo}>
              							{`Two brothers making the crispiest and unique pizzas in the city ready-to-go.`}
            						</Text>
          					</View>
          					<View style={styles.rating}>
            						<View style={styles.rectangle142}/>
<Svg style={styles.group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
<Path d="M8.94083 9.44592L5.88729 7.84138L2.83258 9.44592L3.41732 6.04504L0.943848 3.63706L4.35876 3.14119L5.88729 -6.10352e-05L7.41581 3.14119L10.8307 3.63706L8.35725 6.04621L8.94083 9.44592Z" fill="#FFC529"/>
</Svg>

            						<Text style={styles._0}>
              							{`4.0`}
            						</Text>
            						<Text style={styles._2}>
              							{`(2)`}
            						</Text>
          					</View>
        				</View>
        				<View style={styles.group18169}>
          					<Text style={styles.closednow}>
            						{`Closed now`}
          					</Text>
          					<View style={styles._frame}>
<Svg style={styles.__vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
<Path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="#9E2A2B"/>
</Svg>

<Svg style={styles.___vector} width="4" height="4" viewBox="0 0 4 4" fill="none" >
<Path d="M1.5 0.5H0.5V3.5H3.5V2.5H1.5V0.5Z" fill="#9E2A2B"/>
</Svg>

          					</View>
        				</View>
      			</View>
      			<View style={styles.classicCheesesteaks}>
        				<View style={styles.classiccheesesteaks}/>
        				<ImageBackground style={styles.headclassiccheesesteak} source={require('/assets/home/pics/headclassiccheesesteak.png')}/>
        				<View style={styles._group18170}>
          					<View style={styles._group18172}>
            						<Text style={styles._3miles}>
              							{`0.3 miles`}
            						</Text>
            						<View style={styles.__frame}>
<Svg style={styles.____vector} width="4" height="8" viewBox="0 0 4 8" fill="none" >
<Path d="M2 7.5L2.5 6.5V3.929C3.3605 3.7055 4 2.929 4 2C4 0.897 3.103 0 2 0C0.897 0 0 0.897 0 2C0 2.929 0.6395 3.7055 1.5 3.929V6.5L2 7.5ZM1 2C1 1.4485 1.4485 1 2 1C2.5515 1 3 1.4485 3 2C3 2.5515 2.5515 3 2 3C1.4485 3 1 2.5515 1 2Z" fill="#335C67"/>
</Svg>

<Svg style={styles._____vector} width="10" height="6" viewBox="0 0 10 6" fill="none" >
<Path d="M7.1335 0.281506L6.867 1.24551C8.1625 1.60351 9 2.29201 9 3.00001C9 3.94601 7.3575 5.00001 5 5.00001C2.6425 5.00001 1 3.94601 1 3.00001C1 2.29201 1.8375 1.60351 3.1335 1.24501L2.867 0.281006C1.0985 0.770006 0 1.81151 0 3.00001C0 4.68201 2.1965 6.00001 5 6.00001C7.8035 6.00001 10 4.68201 10 3.00001C10 1.81151 8.9015 0.770006 7.1335 0.281506Z" fill="#335C67"/>
</Svg>

            						</View>
          					</View>
          					<Text style={styles._classicCheesesteaks}>
            						{`Classic Cheesesteaks`}
          					</Text>
          					<View style={styles._frame6}>
            						<Text style={styles.since1995wevebeencraftingthebestPhillyinspiredcheesesteaks}>
              							{`Since 1995, we’ve been crafting the best Philly-inspired cheesesteaks.`}
            						</Text>
          					</View>
          					<View style={styles._rating}>
            						<View style={styles._rectangle142}/>
<Svg style={styles._group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
<Path d="M8.94083 9.44592L5.88729 7.84138L2.83258 9.44592L3.41732 6.04504L0.943848 3.63706L4.35876 3.14119L5.88729 -6.10352e-05L7.41581 3.14119L10.8307 3.63706L8.35725 6.04621L8.94083 9.44592Z" fill="#FFC529"/>
</Svg>

            						<Text style={styles._7}>
              							{`4.7`}
            						</Text>
            						<Text style={styles._3}>
              							{`(3)`}
            						</Text>
          					</View>
        				</View>
        				<View style={styles._group18169}>
          					<Text style={styles.opennow}>
            						{`Open now`}
          					</Text>
          					<View style={styles.___frame}>
<Svg style={styles.______vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
<Path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="#335C67"/>
</Svg>

<Svg style={styles._______vector} width="4" height="4" viewBox="0 0 4 4" fill="none" >
<Path d="M1.5 0.5H0.5V3.5H3.5V2.5H1.5V0.5Z" fill="#335C67"/>
</Svg>

          					</View>
        				</View>
      			</View>
      			<View style={styles.tucosTacos}>
        				<View style={styles.taco2Go}/>
        				<ImageBackground style={styles.headtucostacos} source={require('/assets/home/pics/headtucostacos.png')}/>
        				<View style={styles.__group18170}>
          					<View style={styles.__group18172}>
            						<Text style={styles._2miles}>
              							{`0.2 miles`}
            						</Text>
            						<View style={styles.____frame}>
<Svg style={styles.________vector} width="4" height="8" viewBox="0 0 4 8" fill="none" >
<Path d="M2 7.5L2.5 6.5V3.929C3.3605 3.7055 4 2.929 4 2C4 0.897 3.103 0 2 0C0.897 0 0 0.897 0 2C0 2.929 0.6395 3.7055 1.5 3.929V6.5L2 7.5ZM1 2C1 1.4485 1.4485 1 2 1C2.5515 1 3 1.4485 3 2C3 2.5515 2.5515 3 2 3C1.4485 3 1 2.5515 1 2Z" fill="#335C67"/>
</Svg>

<Svg style={styles._________vector} width="10" height="6" viewBox="0 0 10 6" fill="none" >
<Path d="M7.1335 0.281506L6.867 1.24551C8.1625 1.60351 9 2.29201 9 3.00001C9 3.94601 7.3575 5.00001 5 5.00001C2.6425 5.00001 1 3.94601 1 3.00001C1 2.29201 1.8375 1.60351 3.1335 1.24501L2.867 0.281006C1.0985 0.770006 0 1.81151 0 3.00001C0 4.68201 2.1965 6.00001 5 6.00001C7.8035 6.00001 10 4.68201 10 3.00001C10 1.81151 8.9015 0.770006 7.1335 0.281506Z" fill="#335C67"/>
</Svg>

            						</View>
          					</View>
          					<Text style={styles._tucosTacos}>
            						{`Tuco’s Tacos`}
          					</Text>
          					<View style={styles.__frame6}>
            						<Text style={styles.wehavesomeofthetightesttacosintheareathataretrulysatisfying}>
              							{`We have some of the tightest tacos in the area that are truly satisfying!`}
            						</Text>
          					</View>
          					<View style={styles.__rating}>
            						<View style={styles.__rectangle142}/>
<Svg style={styles.__group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
<Path d="M8.94083 9.44592L5.88729 7.84138L2.83258 9.44592L3.41732 6.04504L0.943848 3.63706L4.35876 3.14119L5.88729 -6.10352e-05L7.41581 3.14119L10.8307 3.63706L8.35725 6.04621L8.94083 9.44592Z" fill="#FFC529"/>
</Svg>

            						<Text style={styles.__0}>
              							{`5.0`}
            						</Text>
            						<Text style={styles._1}>
              							{`(1)`}
            						</Text>
          					</View>
        				</View>
        				<View style={styles.__group18169}>
          					<Text style={styles._opennow}>
            						{`Open now`}
          					</Text>
          					<View style={styles._____frame}>
<Svg style={styles.__________vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
<Path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="#335C67"/>
</Svg>

<Svg style={styles.___________vector} width="4" height="4" viewBox="0 0 4 4" fill="none" >
<Path d="M1.5 0.5H0.5V3.5H3.5V2.5H1.5V0.5Z" fill="#335C67"/>
</Svg>

          					</View>
        				</View>
      			</View>
      			<View style={styles.pizzaTime}>
        				<View style={styles.pizzatime}/>
        				<ImageBackground style={styles.headpizzatime} source={require('/assets/home/pics/headpizzatime.png')}/>
        				<View style={styles.___group18170}>
          					<View style={styles.___group18172}>
            						<Text style={styles.__2miles}>
              							{`0.2 miles`}
            						</Text>
            						<View style={styles.______frame}>
<Svg style={styles.____________vector} width="4" height="8" viewBox="0 0 4 8" fill="none" >
<Path d="M2 7.5L2.5 6.5V3.929C3.3605 3.7055 4 2.929 4 2C4 0.897 3.103 0 2 0C0.897 0 0 0.897 0 2C0 2.929 0.6395 3.7055 1.5 3.929V6.5L2 7.5ZM1 2C1 1.4485 1.4485 1 2 1C2.5515 1 3 1.4485 3 2C3 2.5515 2.5515 3 2 3C1.4485 3 1 2.5515 1 2Z" fill="#335C67"/>
</Svg>

<Svg style={styles._____________vector} width="10" height="6" viewBox="0 0 10 6" fill="none" >
<Path d="M7.1335 0.2815L6.867 1.2455C8.1625 1.6035 9 2.292 9 3C9 3.946 7.3575 5 5 5C2.6425 5 1 3.946 1 3C1 2.292 1.8375 1.6035 3.1335 1.245L2.867 0.281C1.0985 0.77 0 1.8115 0 3C0 4.682 2.1965 6 5 6C7.8035 6 10 4.682 10 3C10 1.8115 8.9015 0.77 7.1335 0.2815Z" fill="#335C67"/>
</Svg>

            						</View>
          					</View>
          					<Text style={styles._pizzaTime}>
            						{`Pizza Time`}
          					</Text>
          					<View style={styles.___frame6}>
            						<Text style={styles.comeandgetsomeofthebestpizzaservedhotstraightfromtheoven}>
              							{`Come and get some of the best pizza served hot straight from the oven!`}
            						</Text>
          					</View>
          					<View style={styles.___rating}>
            						<View style={styles.___rectangle142}/>
<Svg style={styles.___group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
<Path d="M8.94083 9.44592L5.88729 7.84138L2.83258 9.44592L3.41732 6.04504L0.943848 3.63706L4.35876 3.14119L5.88729 -6.10352e-05L7.41581 3.14119L10.8307 3.63706L8.35725 6.04621L8.94083 9.44592Z" fill="#FFC529"/>
</Svg>

            						<Text style={styles._5}>
              							{`4.5`}
            						</Text>
            						<Text style={styles.__2}>
              							{`(2)`}
            						</Text>
          					</View>
        				</View>
        				<View style={styles.___group18169}>
          					<Text style={styles.__opennow}>
            						{`Open now`}
          					</Text>
          					<View style={styles._______frame}>
<Svg style={styles.______________vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
<Path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="#335C67"/>
</Svg>

<Svg style={styles._______________vector} width="4" height="4" viewBox="0 0 4 4" fill="none" >
<Path d="M1.5 0.5H0.5V3.5H3.5V2.5H1.5V0.5Z" fill="#335C67"/>
</Svg>

          					</View>
        				</View>
      			</View>
      			<View style={styles._taco2Go}>
        				<View style={styles.__taco2Go}/>
        				<ImageBackground style={styles.headtaco2go} source={require('/assets/home/pics/headtaco2go.png')}/>
        				<View style={styles.____group18170}>
          					<View style={styles.____group18172}>
            						<Text style={styles.__1miles}>
              							{`0.1 miles`}
            						</Text>
            						<View style={styles.________frame}>
<Svg style={styles.________________vector} width="4" height="8" viewBox="0 0 4 8" fill="none" >
<Path d="M2 7.5L2.5 6.5V3.929C3.3605 3.7055 4 2.929 4 2C4 0.897 3.103 0 2 0C0.897 0 0 0.897 0 2C0 2.929 0.6395 3.7055 1.5 3.929V6.5L2 7.5ZM1 2C1 1.4485 1.4485 1 2 1C2.5515 1 3 1.4485 3 2C3 2.5515 2.5515 3 2 3C1.4485 3 1 2.5515 1 2Z" fill="#335C67"/>
</Svg>

<Svg style={styles._________________vector} width="10" height="6" viewBox="0 0 10 6" fill="none" >
<Path d="M7.1335 0.281506L6.867 1.24551C8.1625 1.60351 9 2.29201 9 3.00001C9 3.94601 7.3575 5.00001 5 5.00001C2.6425 5.00001 1 3.94601 1 3.00001C1 2.29201 1.8375 1.60351 3.1335 1.24501L2.867 0.281006C1.0985 0.770006 0 1.81151 0 3.00001C0 4.68201 2.1965 6.00001 5 6.00001C7.8035 6.00001 10 4.68201 10 3.00001C10 1.81151 8.9015 0.770006 7.1335 0.281506Z" fill="#335C67"/>
</Svg>

            						</View>
          					</View>
          					<Text style={styles.___taco2Go}>
            						{`Taco2Go`}
          					</Text>
          					<View style={styles.____frame6}>
            						<Text style={styles.thefinesttacosandfreshestingredientsyoullfindonthestreets}>
              							{`The finest tacos and freshest ingredients you’ll find on the streets!`}
            						</Text>
          					</View>
          					<View style={styles.____rating}>
            						<View style={styles.____rectangle142}/>
<Svg style={styles.____group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
<Path d="M8.94083 9.44592L5.88729 7.84138L2.83258 9.44592L3.41732 6.04504L0.943848 3.63706L4.35876 3.14119L5.88729 -6.10352e-05L7.41581 3.14119L10.8307 3.63706L8.35725 6.04621L8.94083 9.44592Z" fill="#FFC529"/>
</Svg>

            						<Text style={styles.__3}>
              							{`4.3`}
            						</Text>
            						<Text style={styles.___3}>
              							{`(3)`}
            						</Text>
          					</View>
        				</View>
        				<View style={styles.____group18169}>
          					<Text style={styles.___opennow}>
            						{`Open now`}
          					</Text>
          					<View style={styles._________frame}>
<Svg style={styles.__________________vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
<Path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="#335C67"/>
</Svg>

<Svg style={styles.___________________vector} width="4" height="4" viewBox="0 0 4 4" fill="none" >
<Path d="M1.5 0.5H0.5V3.5H3.5V2.5H1.5V0.5Z" fill="#335C67"/>
</Svg>

          					</View>
        				</View>
      			</View>
      			<View style={styles.search}>
        				<View style={styles.searchBox}>
          					<View style={styles.group18163}>
<Svg style={styles.____________________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
<Path d="M5.98706 11.9741C7.31543 11.9739 8.60551 11.5292 9.65189 10.7109L12.9418 14.0007L14 12.9425L10.7101 9.65264C11.5288 8.60615 11.9738 7.31577 11.9741 5.98706C11.9741 2.68595 9.28818 0 5.98706 0C2.68595 0 0 2.68595 0 5.98706C0 9.28818 2.68595 11.9741 5.98706 11.9741ZM5.98706 1.49677C8.46346 1.49677 10.4774 3.51066 10.4774 5.98706C10.4774 8.46346 8.46346 10.4774 5.98706 10.4774C3.51066 10.4774 1.49677 8.46346 1.49677 5.98706C1.49677 3.51066 3.51066 1.49677 5.98706 1.49677Z" fill="#9A9FAE"/>
</Svg>

            						<Text style={styles._search}>
              							{`Search`}
            						</Text>
          					</View>
        				</View>
      			</View>
      			<View style={styles.hungry}>
        				<Text style={styles._hungry}>
          					{`Hungry?`}
        				</Text>
      			</View>
      			<View style={styles.filter}>
<Svg style={styles._____________________vector} width="22" height="14" viewBox="0 0 22 14" fill="none" >
<Path d="M4.33334 5.66668H17.6667V8.33334H4.33334V5.66668ZM0.333336 0.333344H21.6667V3.00001H0.333336V0.333344ZM8.33334 11H13.6667V13.6667H8.33334V11Z" fill="#5A7B83"/>
</Svg>

      			</View>
    		</View>
        </ScrollView><View style={styles.navbar}>
        				<View style={styles.frame1}>
          					<View style={styles.frame2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            						<View style={styles.group18166}>
<Svg style={styles.______________________vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
<Path d="M1.99992 20H15.9993C16.5298 20 17.0384 19.7893 17.4135 19.4142C17.7886 19.0392 17.9993 18.5305 17.9993 18.0001V9.00044C18 8.86883 17.9748 8.73838 17.925 8.61654C17.8753 8.49471 17.802 8.3839 17.7093 8.29046L9.70961 0.290781C9.52225 0.104538 9.26881 0 9.00463 0C8.74046 0 8.48702 0.104538 8.29966 0.290781L0.299988 8.29046C0.205503 8.38307 0.130337 8.49352 0.0788421 8.61539C0.0273475 8.73726 0.000549228 8.86813 0 9.00044V18.0001C0 18.5305 0.210705 19.0392 0.585763 19.4142C0.96082 19.7893 1.46951 20 1.99992 20ZM6.99972 18.0001V13.0003H10.9996V18.0001H6.99972ZM1.99992 9.41042L8.99963 2.4107L15.9993 9.41042V18.0001H12.9995V13.0003C12.9995 12.4699 12.7888 11.9612 12.4137 11.5861C12.0387 11.2111 11.53 11.0004 10.9996 11.0004H6.99972C6.4693 11.0004 5.96062 11.2111 5.58556 11.5861C5.2105 11.9612 4.9998 12.4699 4.9998 13.0003V18.0001H1.99992V9.41042Z" fill="white"/>
</Svg>

              							<Text style={styles._home}>
                								{`Home`}
              							</Text>
            						</View>
                        </TouchableOpacity>
          					</View>
          					<View style={styles.frame3}>
                      <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
            						<View style={styles.group18167}>
<Svg style={styles.group18165} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path d="M8.50017 12.0001C10.7062 12.0001 12.5002 10.2061 12.5002 8.00009C12.5002 5.79408 10.7062 4.00006 8.50017 4.00006C6.29415 4.00006 4.50014 5.79408 4.50014 8.00009C4.50014 10.2061 6.29415 12.0001 8.50017 12.0001ZM8.50017 6.00008C9.60318 6.00008 10.5002 6.89708 10.5002 8.00009C10.5002 9.1031 9.60318 10.0001 8.50017 10.0001C7.39716 10.0001 6.50015 9.1031 6.50015 8.00009C6.50015 6.89708 7.39716 6.00008 8.50017 6.00008Z" fill="white"/>
<Path d="M7.92015 19.8142C8.0894 19.935 8.29218 20 8.50015 20C8.70813 20 8.91091 19.935 9.08016 19.8142C9.38416 19.5992 16.5292 14.4401 16.5002 8.00006C16.5002 3.58903 12.9112 0 8.50015 0C4.08912 0 0.500088 3.58903 0.500088 7.99506C0.471088 14.4401 7.61615 19.5992 7.92015 19.8142ZM8.50015 2.00002C11.8092 2.00002 14.5002 4.69104 14.5002 8.00506C14.5212 12.4431 10.1122 16.4281 8.50015 17.7351C6.88914 16.4271 2.4791 12.4411 2.5001 8.00006C2.5001 4.69104 5.19113 2.00002 8.50015 2.00002Z" fill="white"/>
</Svg>
              							 <Text style={styles.map}>
                								{`Map`}
              							</Text>
            						</View>
                        </TouchableOpacity>
          					</View>
          					<View style={styles.frame4}>
                    <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                        <View style={styles.group18168}>
<Svg style={styles._______________________vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
<Path d="M2 20H16C17.103 20 18 19.103 18 18V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H14V5C14 2.243 11.757 0 9 0C6.243 0 4 2.243 4 5V6H1C0.734783 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7V18C0 19.103 0.897 20 2 20ZM6 5C6 3.346 7.346 2 9 2C10.654 2 12 3.346 12 5V6H6V5ZM2 8H4V10H6V8H12V10H14V8H16L16.002 18H2V8Z" fill="white"/>
</Svg>

              							<Text style={styles.orders}>
                								{`Orders`}
              							</Text>
            						</View>
                        </TouchableOpacity>
          					</View>
          					<View style={styles.frame5}>
                      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            						<View style={styles.group18171}>
<Svg style={styles.________________________vector} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path d="M10 0C8.95904 0 7.94147 0.308679 7.07594 0.887002C6.21042 1.46533 5.53583 2.28732 5.13747 3.24903C4.73912 4.21075 4.63489 5.269 4.83797 6.28995C5.04105 7.3109 5.54232 8.24871 6.27838 8.98477C7.01445 9.72084 7.95225 10.2221 8.97321 10.4252C9.99416 10.6283 11.0524 10.524 12.0141 10.1257C12.9758 9.72733 13.7978 9.05273 14.3762 8.18721C14.9545 7.32169 15.2632 6.30411 15.2632 5.26316C15.2632 3.86728 14.7086 2.52858 13.7216 1.54154C12.7346 0.55451 11.3959 0 10 0ZM10 8.42105C9.37543 8.42105 8.76488 8.23585 8.24557 7.88885C7.72625 7.54186 7.3215 7.04866 7.08248 6.47163C6.84347 5.8946 6.78093 5.25965 6.90278 4.64708C7.02463 4.03451 7.32539 3.47183 7.76703 3.03019C8.20867 2.58855 8.77135 2.28779 9.38392 2.16594C9.9965 2.04409 10.6314 2.10663 11.2085 2.34564C11.7855 2.58466 12.2787 2.98941 12.6257 3.50873C12.9727 4.02804 13.1579 4.63859 13.1579 5.26316C13.1579 6.10068 12.8252 6.90391 12.233 7.49613C11.6407 8.08835 10.8375 8.42105 10 8.42105ZM19.4737 20V18.9474C19.4737 16.9931 18.6974 15.119 17.3155 13.7371C15.9337 12.3553 14.0595 11.5789 12.1053 11.5789H7.89474C5.94051 11.5789 4.06632 12.3553 2.68447 13.7371C1.30263 15.119 0.526314 16.9931 0.526314 18.9474V20H2.63158V18.9474C2.63158 17.5515 3.18609 16.2128 4.17312 15.2258C5.16015 14.2387 6.49886 13.6842 7.89474 13.6842H12.1053C13.5011 13.6842 14.8398 14.2387 15.8269 15.2258C16.8139 16.2128 17.3684 17.5515 17.3684 18.9474V20H19.4737Z" fill="white"/>
</Svg>

              							<Text style={styles.account}>
                								{`Account`}
              							</Text>
            						</View>
                        </TouchableOpacity>
          					</View>
        				</View>
      			</View>
    </View>
    )
}




const styles = StyleSheet.create({
  	home: {
    flexShrink: 0,
    height: 975,
    width: 375,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 10,
    padding: 10
},
  	pizzaGuys: {
    position: "absolute",
    flexShrink: 0,
    top: 764,
    height: 140,
    left: 24,
    right: 24,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	pizzaguys: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20
},
  headpizzaguys: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 70,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
},
  	group18170: {
    position: "absolute",
    flexShrink: 0,
    top: 21,
    height: 101,
    left: 16,
    width: 288
},
  	group18172: {
    position: "absolute",
    flexShrink: 0,
    top: 81,
    height: 14,
    left: 229,
    width: 59
},
  	_1miles: {
    position: "absolute",
    flexShrink: 0,
    left: 15,
    width: 44,
    height: 14,
    textAlign: "left",
    color: "rgba(158, 42, 43, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 4,
    bottom: 4,
    left: 4,
    overflow: "visible"
},
  	_vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	_pizzaGuys: {
    position: "absolute",
    flexShrink: 0,
    top: 55,
    width: 75,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	frame6: {
    position: "absolute",
    flexShrink: 0,
    top: 75,
    height: 26,
    width: 205,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
},
  	twobrothersmakingthecrispiestanduniquepizzasinthecityreadytogo: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	rating: {
    position: "absolute",
    flexShrink: 0,
    height: 28,
    width: 69
},
  	rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 69,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    borderRadius: 100
},
  	group17367: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    height: 9,
    left: 31,
    width: 10
},
  	_0: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    left: 11,
    width: 16,
    height: 14,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_2: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    left: 45,
    width: 12,
    height: 12,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	group18169: {
    position: "absolute",
    flexShrink: 0,
    top: 86,
    height: 14,
    left: 244,
    width: 76
},
  	closednow: {
    position: "absolute",
    flexShrink: 0,
    left: 14,
    width: 62,
    height: 14,
    textAlign: "left",
    color: "rgba(158, 42, 43, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	__vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	___vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 4,
    bottom: 6,
    left: 6,
    overflow: "visible"
},
  	classicCheesesteaks: {
    position: "absolute",
    flexShrink: 0,
    top: 608,
    height: 140,
    left: 24,
    right: 24,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	classiccheesesteaks: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20
},
    headclassiccheesesteak: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 70,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
},
  	_group18170: {
    position: "absolute",
    flexShrink: 0,
    top: 21,
    height: 101,
    left: 16,
    width: 290
},
  	_group18172: {
    position: "absolute",
    flexShrink: 0,
    top: 81,
    height: 14,
    left: 229,
    width: 61
},
  	_3miles: {
    position: "absolute",
    flexShrink: 0,
    left: 15,
    width: 46,
    height: 14,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	__frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	____vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 4,
    bottom: 4,
    left: 4,
    overflow: "visible"
},
  	_____vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	_classicCheesesteaks: {
    position: "absolute",
    flexShrink: 0,
    top: 55,
    width: 149,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	_frame6: {
    position: "absolute",
    flexShrink: 0,
    top: 75,
    height: 26,
    width: 205,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
},
  	since1995wevebeencraftingthebestPhillyinspiredcheesesteaks: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_rating: {
    position: "absolute",
    flexShrink: 0,
    height: 28,
    width: 69
},
  	_rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 69,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
    borderRadius: 100
},
  	_group17367: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    height: 9,
    left: 31,
    width: 10
},
  	_7: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    left: 11,
    width: 15,
    height: 14,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_3: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    left: 45,
    width: 12,
    height: 12,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	_group18169: {
    position: "absolute",
    flexShrink: 0,
    top: 86,
    height: 14,
    left: 244,
    width: 68
},
  	opennow: {
    position: "absolute",
    flexShrink: 0,
    left: 14,
    width: 54,
    height: 14,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	___frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	______vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	_______vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 4,
    bottom: 6,
    left: 6,
    overflow: "visible"
},
  	tucosTacos: {
    position: "absolute",
    flexShrink: 0,
    top: 452,
    height: 140,
    left: 24,
    right: 24,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	taco2Go: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20
},
    headtucostacos: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 70,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
},
  	__group18170: {
    position: "absolute",
    flexShrink: 0,
    top: 21,
    height: 101,
    left: 16,
    width: 290
},
  	__group18172: {
    position: "absolute",
    flexShrink: 0,
    top: 81,
    height: 14,
    left: 229,
    width: 61
},
  	_2miles: {
    position: "absolute",
    flexShrink: 0,
    left: 15,
    width: 46,
    height: 14,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	____frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 4,
    bottom: 4,
    left: 4,
    overflow: "visible"
},
  	_________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	_tucosTacos: {
    position: "absolute",
    flexShrink: 0,
    top: 55,
    width: 86,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	__frame6: {
    position: "absolute",
    flexShrink: 0,
    top: 75,
    height: 26,
    width: 205,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
},
  	wehavesomeofthetightesttacosintheareathataretrulysatisfying: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	__rating: {
    position: "absolute",
    flexShrink: 0,
    height: 28,
    width: 69
},
  	__rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 69,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
    borderRadius: 100
},
  	__group17367: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    height: 9,
    left: 31,
    width: 10
},
  	__0: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    left: 11,
    width: 16,
    height: 14,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_1: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    left: 45,
    width: 11,
    height: 12,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	__group18169: {
    position: "absolute",
    flexShrink: 0,
    top: 86,
    height: 14,
    left: 244,
    width: 68
},
  	_opennow: {
    position: "absolute",
    flexShrink: 0,
    left: 14,
    width: 54,
    height: 14,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_____frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	___________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 4,
    bottom: 6,
    left: 6,
    overflow: "visible"
},
  	pizzaTime: {
    position: "absolute",
    flexShrink: 0,
    top: 296,
    height: 140,
    left: 24,
    right: 24,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	pizzatime: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20
},
  	headpizzatime: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 70,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
},
  	___group18170: {
    position: "absolute",
    flexShrink: 0,
    top: 21,
    height: 101,
    left: 16,
    width: 290
},
  	___group18172: {
    position: "absolute",
    flexShrink: 0,
    top: 81,
    height: 14,
    left: 229,
    width: 61
},
  	__2miles: {
    position: "absolute",
    flexShrink: 0,
    left: 15,
    width: 46,
    height: 14,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	______frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	____________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 4,
    bottom: 4,
    left: 4,
    overflow: "visible"
},
  	_____________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	_pizzaTime: {
    position: "absolute",
    flexShrink: 0,
    top: 55,
    width: 75,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	___frame6: {
    position: "absolute",
    flexShrink: 0,
    top: 75,
    height: 26,
    width: 205,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
},
  	comeandgetsomeofthebestpizzaservedhotstraightfromtheoven: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	___rating: {
    position: "absolute",
    flexShrink: 0,
    height: 28,
    width: 69
},
  	___rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 69,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
    borderRadius: 100
},
  	___group17367: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    height: 9,
    left: 31,
    width: 10
},
  	_5: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    left: 11,
    width: 16,
    height: 14,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	__2: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    left: 45,
    width: 12,
    height: 12,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	___group18169: {
    position: "absolute",
    flexShrink: 0,
    top: 86,
    height: 14,
    left: 244,
    width: 68
},
  	__opennow: {
    position: "absolute",
    flexShrink: 0,
    left: 14,
    width: 54,
    height: 14,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_______frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	______________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	_______________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 4,
    bottom: 6,
    left: 6,
    overflow: "visible"
},
  	_taco2Go: {
    position: "absolute",
    flexShrink: 0,
    top: 140,
    height: 140,
    left: 24,
    right: 24,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	__taco2Go: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20
},
  	headtaco2go: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 70,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
},
  	____group18170: {
    position: "absolute",
    flexShrink: 0,
    top: 21,
    height: 101,
    left: 16,
    width: 288
},
  	____group18172: {
    position: "absolute",
    flexShrink: 0,
    top: 81,
    height: 14,
    left: 229,
    width: 59
},
  	__1miles: {
    position: "absolute",
    flexShrink: 0,
    left: 15,
    width: 44,
    height: 14,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	________frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	________________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 4,
    bottom: 4,
    left: 4,
    overflow: "visible"
},
  	_________________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	___taco2Go: {
    position: "absolute",
    flexShrink: 0,
    top: 55,
    width: 61,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	____frame6: {
    position: "absolute",
    flexShrink: 0,
    top: 75,
    height: 26,
    width: 205,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
},
  	thefinesttacosandfreshestingredientsyoullfindonthestreets: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	____rating: {
    position: "absolute",
    flexShrink: 0,
    height: 28,
    width: 69
},
  	____rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 69,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
    borderRadius: 100
},
  	____group17367: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    height: 9,
    left: 31,
    width: 10
},
  	__3: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    left: 11,
    width: 16,
    height: 14,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	___3: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    left: 45,
    width: 12,
    height: 12,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	____group18169: {
    position: "absolute",
    flexShrink: 0,
    top: 86,
    height: 14,
    left: 244,
    width: 68
},
  	___opennow: {
    position: "absolute",
    flexShrink: 0,
    left: 14,
    width: 54,
    height: 14,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_________frame: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    height: 12,
    width: 12,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    overflow: "visible"
},
  	___________________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 4,
    bottom: 6,
    left: 6,
    overflow: "visible"
},
  	search: {
    position: "absolute",
    flexShrink: 0,
    top: 88,
    height: 36,
    left: 24,
    right: 69,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	searchBox: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(235, 235, 235, 1)",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
    borderRadius: 50
},
  	group18163: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    height: 19,
    left: 17,
    width: 68
},
  	____________________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    width: 14,
    height: 14,
    overflow: "visible"
},
  	_search: {
    position: "absolute",
    flexShrink: 0,
    left: 20,
    width: 48,
    height: 19,
    textAlign: "left",
    color: "rgba(154, 159, 174, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	hungry: {
    position: "absolute",
    flexShrink: 0,
    top: 41,
    height: 31,
    left: 22,
    width: 113,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0
},
  	_hungry: {
    flexShrink: 0,
    width: 113,
    height: 31,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 0
},
  	filter: {
    position: "absolute",
    flexShrink: 0,
    top: 88,
    height: 36,
    right: 24,
    width: 36,
    backgroundColor: "rgba(235, 235, 235, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    paddingVertical: 9,
    paddingHorizontal: 5,
    borderRadius: 20
},
  	_____________________vector: {
    flexShrink: 0,
    width: 21,
    height: 13,
    overflow: "visible"
},
  	navbar: {
    position: "absolute",
    flexShrink: 0,
    bottom: 17,
    height: 48,
    left: 24,
    right: 24,
    backgroundColor: "rgba(51, 92, 103, 0.85)",
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 1)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 50
},
  	frame1: {
    position: "absolute",
    flexShrink: 0,
    bottom: 6,
    height: 34,
    left: 31,
    right: 32,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    columnGap: 50
},
  	frame2: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	group18166: {
    position: "absolute",
    flexShrink: 0,
    height: 34,
    width: 27
},
  	______________________vector: {
    position: "absolute",
    flexShrink: 0,
    left: 4,
    width: 18,
    height: 20,
    overflow: "visible"
},
  	_home: {
    position: "absolute",
    flexShrink: 0,
    top: 22,
    width: 27,
    height: 12,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	frame3: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	group18167: {
    position: "absolute",
    flexShrink: 0,
    height: 34,
    left: 4,
    width: 20
},
  	group18165: {
    position: "absolute",
    flexShrink: 0,
    height: 20,
    left: 2,
    width: 16
},
  	map: {
    position: "absolute",
    flexShrink: 0,
    top: 22,
    width: 20,
    height: 12,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	frame4: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	group18168: {
    position: "absolute",
    flexShrink: 0,
    height: 34,
    left: -1,
    width: 30
},
  	_______________________vector: {
    position: "absolute",
    flexShrink: 0,
    left: 6,
    width: 18,
    height: 20,
    overflow: "visible"
},
  	orders: {
    position: "absolute",
    flexShrink: 0,
    top: 22,
    width: 30,
    height: 12,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	frame5: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	group18171: {
    position: "absolute",
    flexShrink: 0,
    height: 34,
    left: -5,
    width: 37
},
  	________________________vector: {
    position: "absolute",
    flexShrink: 0,
    left: 9,
    width: 19,
    height: 20,
    overflow: "visible"
},
  	account: {
    position: "absolute",
    flexShrink: 0,
    top: 22,
    width: 37,
    height: 12,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
}
})