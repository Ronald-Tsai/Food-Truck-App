import * as React from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Maps( {navigation} ){
    return (
        <View style={styles.container}> 
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
    		<View style={styles.map}>
      			<ImageBackground style={styles.mapframe} source={require('/assets/maps/map.png')}/>
      			<View style={styles.frame7}>
        				<View style={styles.taco2Go}>
          					<View style={styles._taco2Go}/>
          					<ImageBackground style={styles.headtaco2go} source={require('/assets/maps/headtaco2go.png')}/>
          					<View style={styles.group18170}>
            						<View style={styles.group18172}>
              							<Text style={styles._1miles}>
                								{`0.1 miles`}
              							</Text>
              							<View style={styles.frame}>
<Svg style={styles.vector} width="4" height="8" viewBox="0 0 4 8" fill="none" >
<Path d="M2 7.5L2.5 6.5V3.929C3.3605 3.7055 4 2.929 4 2C4 0.897 3.103 0 2 0C0.897 0 0 0.897 0 2C0 2.929 0.6395 3.7055 1.5 3.929V6.5L2 7.5ZM1 2C1 1.4485 1.4485 1 2 1C2.5515 1 3 1.4485 3 2C3 2.5515 2.5515 3 2 3C1.4485 3 1 2.5515 1 2Z" fill="#335C67"/>
</Svg>

<Svg style={styles._vector} width="10" height="6" viewBox="0 0 10 6" fill="none" >
<Path d="M7.1335 0.281506L6.867 1.24551C8.1625 1.60351 9 2.29201 9 3.00001C9 3.94601 7.3575 5.00001 5 5.00001C2.6425 5.00001 1 3.94601 1 3.00001C1 2.29201 1.8375 1.60351 3.1335 1.24501L2.867 0.281006C1.0985 0.770006 0 1.81151 0 3.00001C0 4.68201 2.1965 6.00001 5 6.00001C7.8035 6.00001 10 4.68201 10 3.00001C10 1.81151 8.9015 0.770006 7.1335 0.281506Z" fill="#335C67"/>
</Svg>

              							</View>
            						</View>
            						<Text style={styles.__taco2Go}>
              							{`Taco2Go`}
            						</Text>
            						<View style={styles.frame6}>
              							<Text style={styles.thefinesttacosandfreshestingredientsyoullfindonthestreets}>
                								{`The finest tacos and freshest ingredients you’ll find on the streets!`}
              							</Text>
            						</View>
            						<View style={styles.rating}>
              							<View style={styles.rectangle142}/>
<Svg style={styles.group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
<Path d="M8.94083 9.44592L5.88729 7.84138L2.83258 9.44592L3.41732 6.04504L0.943848 3.63706L4.35876 3.14119L5.88729 -6.10352e-05L7.41581 3.14119L10.8307 3.63706L8.35725 6.04621L8.94083 9.44592Z" fill="#FFC529"/>
</Svg>

              							<Text style={styles._3}>
                								{`4.3`}
              							</Text>
              							<Text style={styles.__3}>
                								{`(3)`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles.group18169}>
            						<Text style={styles.opennow}>
              							{`Open now`}
            						</Text>
            						<View style={styles._frame}>
<Svg style={styles.__vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
<Path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="#335C67"/>
</Svg>

<Svg style={styles.___vector} width="4" height="4" viewBox="0 0 4 4" fill="none" >
<Path d="M1.5 0.5H0.5V3.5H3.5V2.5H1.5V0.5Z" fill="#335C67"/>
</Svg>

            						</View>
          					</View>
        				</View>
      			</View>
                </View>
                </ScrollView>
                <View style={styles.navbar}>
        				<View style={styles.frame1}>
          					<View style={styles.frame2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            						<View style={styles.group18166}>
<Svg style={styles.____vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
<Path d="M1.99992 20H15.9993C16.5298 20 17.0384 19.7893 17.4135 19.4142C17.7886 19.0392 17.9993 18.5305 17.9993 18.0001V9.00044C18 8.86883 17.9748 8.73838 17.925 8.61654C17.8753 8.49471 17.802 8.3839 17.7093 8.29046L9.70961 0.290781C9.52225 0.104538 9.26881 0 9.00463 0C8.74046 0 8.48702 0.104538 8.29966 0.290781L0.299988 8.29046C0.205503 8.38307 0.130337 8.49352 0.0788421 8.61539C0.0273475 8.73726 0.000549228 8.86813 0 9.00044V18.0001C0 18.5305 0.210705 19.0392 0.585763 19.4142C0.96082 19.7893 1.46951 20 1.99992 20ZM6.99972 18.0001V13.0003H10.9996V18.0001H6.99972ZM1.99992 9.41042L8.99963 2.4107L15.9993 9.41042V18.0001H12.9995V13.0003C12.9995 12.4699 12.7888 11.9612 12.4137 11.5861C12.0387 11.2111 11.53 11.0004 10.9996 11.0004H6.99972C6.4693 11.0004 5.96062 11.2111 5.58556 11.5861C5.2105 11.9612 4.9998 12.4699 4.9998 13.0003V18.0001H1.99992V9.41042Z" fill="white"/>
</Svg>

              							<Text style={styles.home}>
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
              							 <Text style={styles._map}>
                								{`Map`}
              							</Text>
            						</View>
                        </TouchableOpacity>
          					</View>
          					<View style={styles.frame4}>
                    <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                        <View style={styles.group18168}>
<Svg style={styles._____vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
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
<Svg style={styles.______vector} width="20" height="20" viewBox="0 0 20 20" fill="none" >
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
  	map: {
    flexShrink: 0,
    height: 812,
    width: 375,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 10,
    padding: 10
},
  	mapframe: {
    position: "absolute",
    flexShrink: 0,
    height: 812,
    width: 375,
    alignItems: "flex-start",
    rowGap: 0
},
  	frame7: {
    position: "absolute",
    flexShrink: 0,
    top: 575,
    height: 237,
    width: 375,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px -4px 10px 0px rgba(147, 168, 173, 0.5)",
    alignItems: "flex-start",
    rowGap: 0
},
  	taco2Go: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    height: 140,
    left: 24,
    right: 24,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	_taco2Go: {
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
    color: "rgba(51, 92, 103, 1)",
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
  	__taco2Go: {
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
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
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
  	_3: {
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
  	__3: {
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
  	____vector: {
    position: "absolute",
    flexShrink: 0,
    left: 4,
    width: 18,
    height: 20,
    overflow: "visible"
},
  	home: {
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
  	_map: {
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
  	_____vector: {
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
  	______vector: {
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