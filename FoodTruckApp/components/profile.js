import * as React from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Svg, Path, G, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeBlend } from 'react-native-svg';

export default function Profile( {navigation} ){
    return (
        <View style={styles.container}> 
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
    		<View style={styles.taco2Go}>
      			<View style={styles.allhours}>
        				<View style={styles.hours}>
          					<Text style={styles.monday10am5pmWednesday10am5pmFriday10am5pmSunday12pm7pm}>
            						{`Monday: 10 am - 5 pm\nWednesday: 10 am - 5 pm\nFriday: 10 am - 5 pm\nSunday: 12 pm - 7 pm`}
          					</Text>
        				</View>
        				<View style={styles.hours2}>
          					<Text style={styles.tuesday10am5pmThursday10am5pmSaturday12pm7pm}>
            						{`Tuesday: 10 am - 5 pm\nThursday: 10 am - 5 pm\nSaturday: 12 pm - 7 pm`}
          					</Text>
        				</View>
      			</View>
<Svg style={styles.group18173} width="15" height="19" viewBox="0 0 15 19" fill="none" >
<Path d="M6.95626 18.5754C7.11492 18.6887 7.30503 18.7496 7.5 18.7496C7.69497 18.7496 7.88508 18.6887 8.04374 18.5754C8.32874 18.3739 15.0271 13.5374 14.9999 7.49992C14.9999 3.36465 11.6353 0 7.5 0C3.36473 0 8.25345e-05 3.36465 8.25345e-05 7.49523C-0.0271047 13.5374 6.67126 18.3739 6.95626 18.5754ZM7.5 1.87498C10.6022 1.87498 13.1249 4.39776 13.1249 7.50461C13.1446 11.6652 9.01123 15.4011 7.5 16.6264C5.9897 15.4001 1.85537 11.6633 1.87506 7.49992C1.87506 4.39776 4.39785 1.87498 7.5 1.87498Z" fill="#335C67"/>
<Path d="M7.5 11.3123C9.49918 11.3123 11.125 9.5744 11.125 7.43737C11.125 5.30035 9.49918 3.56244 7.5 3.56244C5.50081 3.56244 3.87501 5.30035 3.87501 7.43737C3.87501 9.5744 5.50081 11.3123 7.5 11.3123ZM7.5 5.49991C8.49959 5.49991 9.31249 6.36886 9.31249 7.43737C9.31249 8.50588 8.49959 9.37484 7.5 9.37484C6.50041 9.37484 5.6875 8.50588 5.6875 7.43737C5.6875 6.36886 6.50041 5.49991 7.5 5.49991Z" fill="#335C67"/>
</Svg>

      			<View style={styles.location}>
        				<Text style={styles.eWashingtonStIndianapolisIN46204}>
          					{`32 E Washington St, Indianapolis, IN 46204`}
        				</Text>
      			</View>
      			<View style={styles.description}>
        				<Text style={styles.thefinesttacosandfreshestingredientsyoullfindonthestreetsEveryhandcraftedtacoispreparedwithfreshingredientsgatheredeachdayOurspecialtacosauceisrenownedinthetacobusinessbecauseofitstangyandsweettastethatyouareguaranteedtoenjoyTryourtacostoday}>
          					{`The finest tacos and freshest ingredients you’ll find on the streets! Every handcrafted taco is prepared with fresh ingredients gathered each day. Our special taco sauce is renowned in the taco business because of its tangy and sweet taste that you are guaranteed to enjoy. Try our tacos today!\n\n\n\n`}
        				</Text>
      			</View>
      			<View style={styles.taco}>
        				<ImageBackground style={styles.pexelsphoto141799841} source={{uri: /* dummy image */ 'https://dummyimage.com/327x140/000/fff.jpg'}}/>
      			</View>
      			<View style={styles.title}>
        				<Text style={styles._taco2Go}>
          					{`Taco2Go`}
        				</Text>
      			</View>
<Svg style={styles.back} width="56" height="56" viewBox="0 0 56 56" fill="none" >
<G filter="url(#filter0_d_59_323)">
<Path d="M34.6316 6H21.3684C15.0898 6 10 11.0898 10 17.3684V30.6316C10 36.9102 15.0898 42 21.3684 42H34.6316C40.9102 42 46 36.9102 46 30.6316V17.3684C46 11.0898 40.9102 6 34.6316 6Z" fill="white"/>
</G>
<Path d="M30.8421 19.2632L26.1053 23.7006L30.6678 28.2632" stroke="#1A1D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Defs>
<Filter id="filter0_d_59_323" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<FeFlood floodOpacity="0" result="BackgroundImageFix"/>
<FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<FeOffset dy="4"/>
<FeGaussianBlur stdDeviation="5"/>
<FeColorMatrix type="matrix" values="0 0 0 0 0.576471 0 0 0 0 0.658824 0 0 0 0 0.678431 0 0 0 0.5 0"/>
<FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_59_323"/>
<FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_59_323" result="shape"/>
</Filter>
</Defs>
</Svg>

<Svg style={styles.time} width="15" height="15" viewBox="0 0 15 15" fill="none" >
<Path d="M7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C11.6355 15 15 11.6355 15 7.5C15 3.3645 11.6355 0 7.5 0ZM7.5 13.5C4.19175 13.5 1.5 10.8082 1.5 7.5C1.5 4.19175 4.19175 1.5 7.5 1.5C10.8082 1.5 13.5 4.19175 13.5 7.5C13.5 10.8082 10.8082 13.5 7.5 13.5Z" fill="#335C67"/>
<Path d="M8.25001 3.75H6.75001V8.25H11.25V6.75H8.25001V3.75Z" fill="#335C67"/>
</Svg>

      			<View style={styles.pics}>
        				<View style={styles.taco1}>
          					<ImageBackground style={styles._pexelsphoto141799841} source={{uri: /* dummy image */ 'https://dummyimage.com/199x100/000/fff.jpg'}}/>
        				</View>
        				<View style={styles.taco2}>
          					<ImageBackground style={styles.__pexelsphoto141799841} source={{uri: /* dummy image */ 'https://dummyimage.com/199x100/000/fff.jpg'}}/>
        				</View>
        				<View style={styles.taco3}>
          					<ImageBackground style={styles.___pexelsphoto141799841} source={{uri: /* dummy image */ 'https://dummyimage.com/199x100/000/fff.jpg'}}/>
        				</View>
      			</View>
      			<View style={styles.orderNow}>
        				<Text style={styles.viewMenuOrderNow}>
          					{`View Menu / Order Now`}
        				</Text>
      			</View>
      			<View style={styles.addreview}>
        				<Text style={styles.addareview}>
          					{`Add a review`}
        				</Text>
      			</View>
      			<View style={styles.rating}>
        				<View style={styles.rectangle142}/>
<Svg style={styles.group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
<Path d="M8.50519 9.71337L5.4074 8.08558L2.30841 9.71337L2.90163 6.26321L0.392311 3.82032L3.85672 3.31727L5.4074 0.130493L6.95807 3.31727L10.4225 3.82032L7.91316 6.26439L8.50519 9.71337Z" fill="#FFC529"/>
</Svg>

        				<Text style={styles._3}>
          					{`4.3`}
        				</Text>
        				<Text style={styles.__3}>
          					{`(3)`}
        				</Text>
      			</View>
      			<View style={styles.reviews}>
        				<View style={styles.review1}>
          					<View style={styles.frame8}>
<Svg style={styles.vector} width="16" height="17" viewBox="0 0 16 17" fill="none" >
<Path d="M8 0.5C7.12097 0.5 6.26168 0.746943 5.5308 1.2096C4.79991 1.67226 4.23026 2.32985 3.89387 3.09923C3.55748 3.8686 3.46946 4.7152 3.64095 5.53196C3.81244 6.34872 4.23574 7.09897 4.8573 7.68782C5.47887 8.27667 6.27079 8.67768 7.13293 8.84015C7.99507 9.00261 8.8887 8.91923 9.70082 8.60055C10.5129 8.28186 11.2071 7.74219 11.6954 7.04977C12.1838 6.35735 12.4444 5.54329 12.4444 4.71053C12.4444 3.59383 11.9762 2.52286 11.1427 1.73323C10.3092 0.943608 9.17874 0.5 8 0.5ZM8 7.23684C7.47258 7.23684 6.95701 7.08868 6.51848 6.81108C6.07995 6.53349 5.73815 6.13893 5.53632 5.67731C5.33449 5.21568 5.28168 4.70772 5.38457 4.21767C5.48747 3.72761 5.74144 3.27746 6.11438 2.92415C6.48732 2.57084 6.96248 2.33023 7.47976 2.23275C7.99704 2.13527 8.53322 2.1853 9.02049 2.37652C9.50776 2.56773 9.92424 2.89153 10.2173 3.30698C10.5103 3.72243 10.6667 4.21087 10.6667 4.71053C10.6667 5.38055 10.3857 6.02313 9.88562 6.4969C9.38552 6.97068 8.70724 7.23684 8 7.23684ZM16 16.5V15.6579C16 14.0945 15.3444 12.5952 14.1776 11.4897C13.0107 10.3842 11.428 9.76316 9.77778 9.76316H6.22222C4.57199 9.76316 2.98934 10.3842 1.82245 11.4897C0.655554 12.5952 0 14.0945 0 15.6579V16.5H1.77778V15.6579C1.77778 14.5412 2.24603 13.4702 3.07953 12.6806C3.91302 11.891 5.04348 11.4474 6.22222 11.4474H9.77778C10.9565 11.4474 12.087 11.891 12.9205 12.6806C13.754 13.4702 14.2222 14.5412 14.2222 15.6579V16.5H16Z" fill="#EBEBEB"/>
</Svg>

          					</View>
          					<Text style={styles.thefoodwasprettygoodIlikedthetacosalotThesaucewasgreat}>
            						{`The food was pretty good. I liked the tacos a lot. The sauce was great.`}
          					</Text>
          					<Text style={styles.johnDoe10142023}>
            						{`John Doe\n`}<Text style={{"fontFamily":"Gabarito","fontSize":12,"fontWeight":"400","textAlign":"left","letterSpacing":0,"color":"rgba(110, 116, 137, 1)"}}>{`10/14/2023`}</Text>
          					</Text>
          					<View style={styles._rating}>
            						<View style={styles._rectangle142}/>
<Svg style={styles._group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
<Path d="M8.11288 9.58288L5.01508 7.95508L1.9161 9.58288L2.50932 6.13271L0 3.68983L3.46441 3.18678L5.01508 0L6.56576 3.18678L10.0302 3.68983L7.52085 6.1339L8.11288 9.58288Z" fill="#FFC529"/>
</Svg>

            						<Text style={styles.myVar}>
              							{`4`}
            						</Text>
          					</View>
        				</View>
        				<View style={styles.review2}>
          					<View style={styles._frame8}>
<Svg style={styles._vector} width="16" height="17" viewBox="0 0 16 17" fill="none" >
<Path d="M8 0.5C7.12097 0.5 6.26168 0.746943 5.5308 1.2096C4.79991 1.67226 4.23026 2.32985 3.89387 3.09923C3.55748 3.8686 3.46946 4.7152 3.64095 5.53196C3.81244 6.34872 4.23574 7.09897 4.8573 7.68782C5.47887 8.27667 6.27079 8.67768 7.13293 8.84015C7.99507 9.00261 8.8887 8.91923 9.70082 8.60055C10.5129 8.28186 11.2071 7.74219 11.6954 7.04977C12.1838 6.35735 12.4444 5.54329 12.4444 4.71053C12.4444 3.59383 11.9762 2.52286 11.1427 1.73323C10.3092 0.943608 9.17874 0.5 8 0.5ZM8 7.23684C7.47258 7.23684 6.95701 7.08868 6.51848 6.81108C6.07995 6.53349 5.73815 6.13893 5.53632 5.67731C5.33449 5.21568 5.28168 4.70772 5.38457 4.21767C5.48747 3.72761 5.74144 3.27746 6.11438 2.92415C6.48732 2.57084 6.96248 2.33023 7.47976 2.23275C7.99704 2.13527 8.53322 2.1853 9.02049 2.37652C9.50776 2.56773 9.92424 2.89153 10.2173 3.30698C10.5103 3.72243 10.6667 4.21087 10.6667 4.71053C10.6667 5.38055 10.3857 6.02313 9.88562 6.4969C9.38552 6.97068 8.70724 7.23684 8 7.23684ZM16 16.5V15.6579C16 14.0945 15.3444 12.5952 14.1776 11.4897C13.0107 10.3842 11.428 9.76316 9.77778 9.76316H6.22222C4.57199 9.76316 2.98934 10.3842 1.82245 11.4897C0.655554 12.5952 0 14.0945 0 15.6579V16.5H1.77778V15.6579C1.77778 14.5412 2.24603 13.4702 3.07953 12.6806C3.91302 11.891 5.04348 11.4474 6.22222 11.4474H9.77778C10.9565 11.4474 12.087 11.891 12.9205 12.6806C13.754 13.4702 14.2222 14.5412 14.2222 15.6579V16.5H16Z" fill="#EBEBEB"/>
</Svg>

          					</View>
          					<Text style={styles.thefoodwasokIguessGoodenoughwhenIwent}>
            						{`The food was ok, I guess. Good enough when I went.`}
          					</Text>
          					<Text style={styles.joeJohn10132023}>
            						{`Joe John\n`}<Text style={{"fontFamily":"Gabarito","fontSize":12,"fontWeight":"400","textAlign":"left","letterSpacing":0,"color":"rgba(110, 116, 137, 1)"}}>{`10/13/2023`}</Text>
          					</Text>
          					<View style={styles.__rating}>
            						<View style={styles.__rectangle142}/>
            						<Text style={styles._myVar}>
              							{`4`}
            						</Text>
          					</View>
        				</View>
        				<View style={styles.review3}>
          					<View style={styles.__frame8}>
          					</View>
          					<Text style={styles.bestTacosEver}>
            						{`Best. Tacos. Ever.`}
          					</Text>
          					<Text style={styles.lucyS10102023}>
            						{`Lucy S.\n`}<Text style={{"fontFamily":"Gabarito","fontSize":12,"fontWeight":"400","textAlign":"left","letterSpacing":0,"color":"rgba(110, 116, 137, 1)"}}>{`10/10/2023`}</Text>
          					</Text>
          					<View style={styles.___rating}>
            						<View style={styles.___rectangle142}/>
            						<Text style={styles.__myVar}>
              							{`5`}
            						</Text>
          					</View>
        				</View>
      			</View>
<Svg style={styles.group18174} width="327" height="2" viewBox="0 0 327 2" fill="none" >
<Path d="M0 1L327 1.00003" stroke="#C4C7D0"/>
</Svg>
</View>
</ScrollView>
      			<View style={styles.navbar}>
        				<View style={styles.frame1}>
          					<View style={styles.frame2}>
            						<View style={styles.group18166}>
<Svg style={styles.__vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
<Path d="M1.99992 20H15.9993C16.5298 20 17.0384 19.7893 17.4135 19.4142C17.7886 19.0392 17.9993 18.5305 17.9993 18.0001V9.00044C18 8.86883 17.9748 8.73838 17.925 8.61654C17.8753 8.49471 17.802 8.3839 17.7093 8.29046L9.7096 0.290781C9.52225 0.104538 9.26881 0 9.00463 0C8.74046 0 8.48702 0.104538 8.29966 0.290781L0.299988 8.29046C0.205503 8.38307 0.130337 8.49351 0.0788421 8.61539C0.0273475 8.73726 0.000549228 8.86813 0 9.00044V18.0001C0 18.5305 0.210705 19.0392 0.585763 19.4142C0.96082 19.7893 1.46951 20 1.99992 20ZM6.99972 18.0001V13.0003H10.9996V18.0001H6.99972ZM1.99992 9.41042L8.99963 2.4107L15.9993 9.41042V18.0001H12.9995V13.0003C12.9995 12.4699 12.7888 11.9612 12.4137 11.5861C12.0387 11.2111 11.53 11.0004 10.9996 11.0004H6.99972C6.4693 11.0004 5.96062 11.2111 5.58556 11.5861C5.2105 11.9612 4.9998 12.4699 4.9998 13.0003V18.0001H1.99992V9.41042Z" fill="white"/>
</Svg>

              							<Text style={styles.home}>
                								{`Home`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles.frame3}>
            						<View style={styles.group18167}>
<Svg style={styles.group18165} width="17" height="20" viewBox="0 0 17 20" fill="none" >
<Path d="M8.50015 12.0001C10.7062 12.0001 12.5002 10.206 12.5002 8.00003C12.5002 5.79401 10.7062 4 8.50015 4C6.29414 4 4.50012 5.79401 4.50012 8.00003C4.50012 10.206 6.29414 12.0001 8.50015 12.0001ZM8.50015 6.00002C9.60316 6.00002 10.5002 6.89702 10.5002 8.00003C10.5002 9.10304 9.60316 10 8.50015 10C7.39715 10 6.50014 9.10304 6.50014 8.00003C6.50014 6.89702 7.39715 6.00002 8.50015 6.00002Z" fill="white"/>
<Path d="M7.92015 19.8142C8.0894 19.935 8.29218 20 8.50015 20C8.70813 20 8.91091 19.935 9.08016 19.8142C9.38416 19.5992 16.5292 14.4401 16.5002 8.00006C16.5002 3.58903 12.9112 0 8.50015 0C4.08912 0 0.500088 3.58903 0.500088 7.99506C0.471088 14.4401 7.61615 19.5992 7.92015 19.8142ZM8.50015 2.00002C11.8092 2.00002 14.5002 4.69104 14.5002 8.00506C14.5212 12.4431 10.1122 16.4281 8.50015 17.7351C6.88914 16.4271 2.4791 12.4411 2.5001 8.00006C2.5001 4.69104 5.19113 2.00002 8.50015 2.00002Z" fill="white"/>
</Svg>

              							<Text style={styles.map}>
                								{`Map`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles.frame4}>
            						<View style={styles.group18168}>
<Svg style={styles.___vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
<Path d="M2 20H16C17.103 20 18 19.103 18 18V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H14V5C14 2.243 11.757 0 9 0C6.243 0 4 2.243 4 5V6H1C0.734783 6 0.480429 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7V18C0 19.103 0.897 20 2 20ZM6 5C6 3.346 7.346 2 9 2C10.654 2 12 3.346 12 5V6H6V5ZM2 8H4V10H6V8H12V10H14V8H16L16.002 18H2V8Z" fill="white"/>
</Svg>

              							<Text style={styles.orders}>
                								{`Orders`}
              							</Text>
            						</View>
          					</View>
          					<View style={styles.frame5}>
            						<View style={styles.group18171}>
<Svg style={styles.____vector} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path d="M9.99999 0C8.95904 0 7.94146 0.308679 7.07594 0.887002C6.21041 1.46533 5.53582 2.28732 5.13747 3.24903C4.73911 4.21075 4.63488 5.269 4.83796 6.28995C5.04104 7.3109 5.54231 8.24871 6.27838 8.98477C7.01444 9.72084 7.95225 10.2221 8.9732 10.4252C9.99415 10.6283 11.0524 10.524 12.0141 10.1257C12.9758 9.72733 13.7978 9.05273 14.3761 8.18721C14.9545 7.32169 15.2631 6.30411 15.2631 5.26316C15.2631 3.86728 14.7086 2.52858 13.7216 1.54154C12.7346 0.55451 11.3959 0 9.99999 0ZM9.99999 8.42105C9.37542 8.42105 8.76487 8.23585 8.24556 7.88885C7.72625 7.54186 7.32149 7.04866 7.08248 6.47163C6.84346 5.8946 6.78093 5.25966 6.90277 4.64708C7.02462 4.03451 7.32538 3.47183 7.76702 3.03019C8.20866 2.58855 8.77134 2.28779 9.38392 2.16594C9.99649 2.04409 10.6314 2.10663 11.2085 2.34564C11.7855 2.58466 12.2787 2.98941 12.6257 3.50873C12.9727 4.02804 13.1579 4.63859 13.1579 5.26316C13.1579 6.10068 12.8252 6.90391 12.233 7.49613C11.6407 8.08835 10.8375 8.42105 9.99999 8.42105ZM19.4737 20V18.9474C19.4737 16.9931 18.6974 15.119 17.3155 13.7371C15.9337 12.3553 14.0595 11.5789 12.1053 11.5789H7.89473C5.9405 11.5789 4.06631 12.3553 2.68447 13.7371C1.30262 15.119 0.526306 16.9931 0.526306 18.9474V20H2.63157V18.9474C2.63157 17.5515 3.18608 16.2128 4.17311 15.2258C5.16015 14.2387 6.49885 13.6842 7.89473 13.6842H12.1053C13.5011 13.6842 14.8398 14.2387 15.8269 15.2258C16.8139 16.2128 17.3684 17.5515 17.3684 18.9474V20H19.4737Z" fill="white"/>
</Svg>

              							<Text style={styles.account}>
                								{`Account`}
              							</Text>
            						</View>
          					</View>
        				</View>
      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	taco2Go: {
    flexShrink: 0,
    height: 812,
    width: 375,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 10,
    padding: 10
},
  	allhours: {
    position: "absolute",
    flexShrink: 0,
    top: 360,
    height: 56,
    left: 47,
    right: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 16
},
  	hours: {
    flexShrink: 0,
    height: 56,
    width: 136,
    alignItems: "center",
    rowGap: 0
},
  	monday10am5pmWednesday10am5pmFriday10am5pmSunday12pm7pm: {
    flexShrink: 0,
    width: 136,
    height: 56,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	hours2: {
    flexShrink: 0,
    height: 56,
    width: 125,
    alignItems: "center",
    rowGap: 0
},
  	tuesday10am5pmThursday10am5pmSaturday12pm7pm: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	group18173: {
    position: "absolute",
    flexShrink: 0,
    top: 328,
    height: 19,
    left: 24,
    width: 15
},
  	location: {
    position: "absolute",
    flexShrink: 0,
    top: 330,
    height: 37,
    left: 51,
    right: 16,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
},
  	eWashingtonStIndianapolisIN46204: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "rgba(51, 92, 103, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	description: {
    position: "absolute",
    flexShrink: 0,
    top: 226,
    height: 104,
    left: 24,
    right: 24,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
},
  	thefinesttacosandfreshestingredientsyoullfindonthestreetsEveryhandcraftedtacoispreparedwithfreshingredientsgatheredeachdayOurspecialtacosauceisrenownedinthetacobusinessbecauseofitstangyandsweettastethatyouareguaranteedtoenjoyTryourtacostoday: {
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
  	taco: {
    position: "absolute",
    flexShrink: 0,
    top: 36,
    height: 140,
    left: 24,
    right: 24,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	pexelsphoto141799841: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 20
},
  	title: {
    position: "absolute",
    flexShrink: 0,
    top: 181,
    height: 34,
    left: 24,
    width: 156,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0
},
  	_taco2Go: {
    flexShrink: 0,
    width: 156,
    height: 32,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 0
},
  	back: {
    position: "absolute",
    flexShrink: 0,
    top: 52,
    height: 36,
    left: 40,
    width: 36
},
  	time: {
    position: "absolute",
    flexShrink: 0,
    top: 362,
    height: 15,
    left: 24,
    width: 15
},
  	pics: {
    position: "absolute",
    flexShrink: 0,
    top: 433,
    height: 100,
    left: 24,
    right: -278,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 16
},
  	taco1: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	_pexelsphoto141799841: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 20
},
  	taco2: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	__pexelsphoto141799841: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 20
},
  	taco3: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10
},
  	___pexelsphoto141799841: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 20
},
  	orderNow: {
    position: "absolute",
    flexShrink: 0,
    bottom: 78,
    left: 24,
    right: 24,
    backgroundColor: "rgba(175, 83, 83, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 152, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 0,
    paddingVertical: 7,
    paddingHorizontal: 0,
    borderRadius: 100
},
  	viewMenuOrderNow: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	addreview: {
    position: "absolute",
    flexShrink: 0,
    top: 549,
    left: 196,
    right: 24,
    backgroundColor: "rgba(90, 123, 131, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 152, 173, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 0,
    paddingVertical: 7,
    paddingHorizontal: 0,
    borderRadius: 100
},
  	addareview: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	rating: {
    position: "absolute",
    flexShrink: 0,
    top: 549,
    height: 28,
    left: 24,
    width: 70
},
  	rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 70,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
    borderRadius: 100
},
  	group17367: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    height: 10,
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
    left: 46,
    width: 12,
    height: 12,
    textAlign: "left",
    color: "rgba(110, 116, 137, 1)",
    fontFamily: "Gabarito",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
},
  	reviews: {
    position: "absolute",
    flexShrink: 0,
    top: 593,
    left: 24,
    right: -293,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 16
},
  	review1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 20
},
  	frame8: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    height: 25,
    left: 16,
    width: 25,
    backgroundColor: "rgba(196, 199, 208, 1)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 100
},
  	vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 4,
    bottom: 5,
    left: 5,
    overflow: "visible"
},
  	thefoodwasprettygoodIlikedthetacosalotThesaucewasgreat: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    right: 16,
    left: 16,
    height: 43,
    textAlign: "left",
    color: "rgba(90, 123, 131, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	johnDoe10142023: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    left: 46,
    width: 56,
    height: 25,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	_rating: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    height: 25,
    left: 163,
    width: 25
},
  	_rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 25,
    height: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
    borderRadius: 100
},
  	_group17367: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    height: 10,
    left: 11,
    width: 10
},
  	myVar: {
    position: "absolute",
    flexShrink: 0,
    top: 6,
    left: 4,
    width: 16,
    height: 14,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	review2: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 20
},
  	_frame8: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    height: 25,
    left: 16,
    width: 25,
    backgroundColor: "rgba(196, 199, 208, 1)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 100
},
  	_vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 4,
    bottom: 5,
    left: 5,
    overflow: "visible"
},
  	thefoodwasokIguessGoodenoughwhenIwent: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    right: 16,
    left: 16,
    height: 43,
    textAlign: "left",
    color: "rgba(90, 123, 131, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	joeJohn10132023: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    left: 46,
    width: 56,
    height: 25,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	__rating: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    height: 25,
    left: 163,
    width: 25
},
  	__rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 25,
    height: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
    borderRadius: 100
},
  	_myVar: {
    position: "absolute",
    flexShrink: 0,
    top: 6,
    left: 4,
    width: 16,
    height: 14,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	review3: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 4px 10px 0px rgba(147, 168, 173, 0.5)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 20
},
  	__frame8: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    height: 25,
    left: 16,
    width: 25,
    backgroundColor: "rgba(196, 199, 208, 1)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 100
},
  	bestTacosEver: {
    position: "absolute",
    flexShrink: 0,
    top: 50,
    right: 16,
    left: 16,
    height: 43,
    textAlign: "left",
    color: "rgba(90, 123, 131, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	lucyS10102023: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    left: 46,
    width: 56,
    height: 25,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	___rating: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    height: 25,
    left: 163,
    width: 25
},
  	___rectangle142: {
    position: "absolute",
    flexShrink: 0,
    width: 25,
    height: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 5.847456932067871px 23.389827728271484px 0px rgba(254, 114, 76, 0.2)",
    borderRadius: 100
},
  	__myVar: {
    position: "absolute",
    flexShrink: 0,
    top: 6,
    left: 4,
    width: 16,
    height: 14,
    textAlign: "left",
    color: "rgba(26, 29, 38, 1)",
    fontFamily: "Gabarito",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	group18174: {
    position: "absolute",
    flexShrink: 0,
    top: 312,
    height: 0,
    left: 24,
    width: 327
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
  	__vector: {
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
  	___vector: {
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
  	____vector: {
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