import * as React from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Orders( {navigation} ){
    return (
        <View style={styles.container}> 
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
    		<View style={styles.orders}>
      			<Text style={styles.yourOrders}>
        				{`Your Orders`}
      			</Text>
      			<View style={styles.beeftaco}>
        				<View style={styles.addreview}>
          					<Text style={styles.viewOrder}>
            						{`View Order`}
          					</Text>
        				</View>
        				<View style={styles.group18170}>
          					<Text style={styles.taco2Go}>
            						{`Taco2Go`}
          					</Text>
          					<Text style={styles.beefTacox1}>
            						{`Beef Taco x1`}
          					</Text>
          					<Text style={styles.cornChipsx1}>
            						{`Corn Chips x1`}
          					</Text>
        				</View>
        				<View style={styles.group18172}>
          					<Text style={styles.$499}>
            						{`$4.99`}
          					</Text>
        				</View>
        				<View style={styles.group18173}>
          					<Text style={styles.$299}>
            						{`$2.99`}
          					</Text>
        				</View>
        				<View style={styles.group18174}>
          					<Text style={styles.total$854}>
            						{`Total: $8.54`}
          					</Text>
        				</View>
      			</View>
                </View>
                </ScrollView>
                <View style={styles.navbar}>
        				<View style={styles.frame1}>
          					<View style={styles.frame2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            						<View style={styles.group18166}>
<Svg style={styles.vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
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
              							 <Text style={styles.map}>
                								{`Map`}
              							</Text>
            						</View>
                        </TouchableOpacity>
          					</View>
          					<View style={styles.frame4}>
                    <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                        <View style={styles.group18168}>
<Svg style={styles._vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
<Path d="M2 20H16C17.103 20 18 19.103 18 18V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H14V5C14 2.243 11.757 0 9 0C6.243 0 4 2.243 4 5V6H1C0.734783 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7V18C0 19.103 0.897 20 2 20ZM6 5C6 3.346 7.346 2 9 2C10.654 2 12 3.346 12 5V6H6V5ZM2 8H4V10H6V8H12V10H14V8H16L16.002 18H2V8Z" fill="white"/>
</Svg>

              							<Text style={styles._orders}>
                								{`Orders`}
              							</Text>
            						</View>
                        </TouchableOpacity>
          					</View>
          					<View style={styles.frame5}>
                      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            						<View style={styles.group18171}>
<Svg style={styles.__vector} width="20" height="20" viewBox="0 0 20 20" fill="none" >
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
  	orders: {
    flexShrink: 0,
    height: 812,
    width: 375,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 10,
    padding: 10
},
  	yourOrders: {
    position: "absolute",
    flexShrink: 0,
    top: 55,
    left: 24,
    width: 123,
    height: 29,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gabarito",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0
},
  	beeftaco: {
    position: "absolute",
    flexShrink: 0,
    top: 101,
    height: 132,
    left: 24,
    right: 24,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
    borderRadius: 20
},
  	addreview: {
    position: "absolute",
    flexShrink: 0,
    top: 96,
    height: 21,
    left: 19,
    width: 155,
    backgroundColor: "rgba(90, 123, 131, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 152, 173, 0.5)",
    alignItems: "center",
    rowGap: 0,
    paddingVertical: 7,
    paddingHorizontal: 0,
    borderRadius: 100
},
  	viewOrder: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    width: 155,
    height: 18,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	group18170: {
    position: "absolute",
    flexShrink: 0,
    top: 10,
    height: 73,
    left: 19,
    width: 97
},
  	taco2Go: {
    position: "absolute",
    flexShrink: 0,
    width: 61,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	beefTacox1: {
    position: "absolute",
    flexShrink: 0,
    top: 27,
    width: 86,
    height: 19,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	cornChipsx1: {
    position: "absolute",
    flexShrink: 0,
    top: 54,
    width: 97,
    height: 19,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	group18172: {
    position: "absolute",
    flexShrink: 0,
    top: 37,
    height: 19,
    left: 265,
    width: 39
},
  	$499: {
    position: "absolute",
    flexShrink: 0,
    width: 39,
    height: 19,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	group18173: {
    position: "absolute",
    flexShrink: 0,
    top: 64,
    height: 19,
    left: 265,
    width: 38
},
  	$299: {
    position: "absolute",
    flexShrink: 0,
    width: 38,
    height: 19,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
},
  	group18174: {
    position: "absolute",
    flexShrink: 0,
    top: 97,
    height: 19,
    left: 224,
    width: 80
},
  	total$854: {
    position: "absolute",
    flexShrink: 0,
    width: 80,
    height: 19,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0
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
  	vector: {
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
  	_vector: {
    position: "absolute",
    flexShrink: 0,
    left: 6,
    width: 18,
    height: 20,
    overflow: "visible"
},
  	_orders: {
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
  	__vector: {
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