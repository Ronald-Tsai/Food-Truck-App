import * as React from 'react';

import { View, ImageBackground, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Svg, Path, G, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeBlend } from 'react-native-svg';


export default function Search({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <View style={styles.search}>
                    <View style={styles.tucosTacos}>
                        <View style={styles.taco2Go} />
                        <ImageBackground style={styles.pexelsphoto141799841} source={{ uri: /* dummy image */ 'https://dummyimage.com/327x70/000/fff.jpg' }} />
                        <View style={styles.group18170}>
                            <View style={styles.group18172}>
                                <Text style={styles._2miles}>
                                    {`0.2 miles`}
                                </Text>
                                <View style={styles.frame}>
                                    <Svg style={styles.vector} width="4" height="8" viewBox="0 0 4 8" fill="none" >
                                        <Path d="M2 7.5L2.5 6.5V3.929C3.3605 3.7055 4 2.929 4 2C4 0.897 3.103 0 2 0C0.897 0 0 0.897 0 2C0 2.929 0.6395 3.7055 1.5 3.929V6.5L2 7.5ZM1 2C1 1.4485 1.4485 1 2 1C2.5515 1 3 1.4485 3 2C3 2.5515 2.5515 3 2 3C1.4485 3 1 2.5515 1 2Z" fill="#335C67" />
                                    </Svg>
                                    <Svg style={styles._vector} width="10" height="6" viewBox="0 0 10 6" fill="none" >
                                        <Path d="M7.1335 0.281506L6.867 1.24551C8.1625 1.60351 9 2.29201 9 3.00001C9 3.94601 7.3575 5.00001 5 5.00001C2.6425 5.00001 1 3.94601 1 3.00001C1 2.29201 1.8375 1.60351 3.1335 1.24501L2.867 0.281006C1.0985 0.770006 0 1.81151 0 3.00001C0 4.68201 2.1965 6.00001 5 6.00001C7.8035 6.00001 10 4.68201 10 3.00001C10 1.81151 8.9015 0.770006 7.1335 0.281506Z" fill="#335C67" />
                                    </Svg>
                                </View>
                            </View>
                            <Text style={styles._tucosTacos}>
                                {`Tuco’s Tacos`}
                            </Text>
                            <View style={styles.frame6}>
                                <Text style={styles.wehavesomeofthetightesttacosintheareathataretrulysatisfying}>
                                    {`We have some of the tightest tacos in the area that are truly satisfying!`}
                                </Text>
                            </View>
                            <View style={styles.rating}>
                                <View style={styles.rectangle142} />
                                <Svg style={styles.group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
                                    <Path d="M8.94083 9.44592L5.88729 7.84138L2.83258 9.44592L3.41732 6.04504L0.943848 3.63706L4.35876 3.14119L5.88729 -6.10352e-05L7.41581 3.14119L10.8307 3.63706L8.35725 6.04621L8.94083 9.44592Z" fill="#FFC529" />
                                </Svg>
                                <Text style={styles._0}>
                                    {`5.0`}
                                </Text>
                                <Text style={styles._1}>
                                    {`(1)`}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.group18169}>
                            <Text style={styles.opennow}>
                                {`Open now`}
                            </Text>
                            <View style={styles._frame}>
                                <Svg style={styles.__vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
                                    <Path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="#335C67" />
                                </Svg>
                                <Svg style={styles.___vector} width="4" height="4" viewBox="0 0 4 4" fill="none" >
                                    <Path d="M1.5 0.5H0.5V3.5H3.5V2.5H1.5V0.5Z" fill="#335C67" />
                                </Svg>
                            </View>
                        </View>
                    </View>
                    <View style={styles._taco2Go}>
                        <View style={styles.__taco2Go} />
                        <ImageBackground style={styles._pexelsphoto141799841} source={{ uri: /* dummy image */ 'https://dummyimage.com/327x70/000/fff.jpg' }} />
                        <View style={styles._group18170}>
                            <View style={styles._group18172}>
                                <Text style={styles._1miles}>
                                    {`0.1 miles`}
                                </Text>
                                <View style={styles.__frame}>
                                    <Svg style={styles.____vector} width="4" height="8" viewBox="0 0 4 8" fill="none" >
                                        <Path d="M2 7.5L2.5 6.5V3.929C3.3605 3.7055 4 2.929 4 2C4 0.897 3.103 0 2 0C0.897 0 0 0.897 0 2C0 2.929 0.6395 3.7055 1.5 3.929V6.5L2 7.5ZM1 2C1 1.4485 1.4485 1 2 1C2.5515 1 3 1.4485 3 2C3 2.5515 2.5515 3 2 3C1.4485 3 1 2.5515 1 2Z" fill="#335C67" />
                                    </Svg>
                                    <Svg style={styles._____vector} width="10" height="6" viewBox="0 0 10 6" fill="none" >
                                        <Path d="M7.1335 0.281506L6.867 1.24551C8.1625 1.60351 9 2.29201 9 3.00001C9 3.94601 7.3575 5.00001 5 5.00001C2.6425 5.00001 1 3.94601 1 3.00001C1 2.29201 1.8375 1.60351 3.1335 1.24501L2.867 0.281006C1.0985 0.770006 0 1.81151 0 3.00001C0 4.68201 2.1965 6.00001 5 6.00001C7.8035 6.00001 10 4.68201 10 3.00001C10 1.81151 8.9015 0.770006 7.1335 0.281506Z" fill="#335C67" />
                                    </Svg>
                                </View>
                            </View>
                            <Text style={styles.___taco2Go}>
                                {`Taco2Go`}
                            </Text>
                            <View style={styles._frame6}>
                                <Text style={styles.thefinesttacosandfreshestingredientsyoullfindonthestreets}>
                                    {`The finest tacos and freshest ingredients you’ll find on the streets!`}
                                </Text>
                            </View>
                            <View style={styles._rating}>
                                <View style={styles._rectangle142} />
                                <Svg style={styles._group17367} width="11" height="10" viewBox="0 0 11 10" fill="none" >
                                    <Path d="M8.94083 9.44592L5.88729 7.84138L2.83258 9.44592L3.41732 6.04504L0.943848 3.63706L4.35876 3.14119L5.88729 -6.10352e-05L7.41581 3.14119L10.8307 3.63706L8.35725 6.04621L8.94083 9.44592Z" fill="#FFC529" />
                                </Svg>
                                <Text style={styles._3}>
                                    {`4.3`}
                                </Text>
                                <Text style={styles.__3}>
                                    {`(3)`}
                                </Text>
                            </View>
                        </View>
                        <View style={styles._group18169}>
                            <Text style={styles._opennow}>
                                {`Open now`}
                            </Text>
                            <View style={styles.___frame}>
                                <Svg style={styles.______vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
                                    <Path d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM5 9C2.7945 9 1 7.2055 1 5C1 2.7945 2.7945 1 5 1C7.2055 1 9 2.7945 9 5C9 7.2055 7.2055 9 5 9Z" fill="#335C67" />
                                </Svg>
                                <Svg style={styles._______vector} width="4" height="4" viewBox="0 0 4 4" fill="none" >
                                    <Path d="M1.5 0.5H0.5V3.5H3.5V2.5H1.5V0.5Z" fill="#335C67" />
                                </Svg>
                            </View>
                        </View>
                    </View>
                    <View style={styles._search}>
                        <View style={styles.searchBox}>
                            <View style={styles.group18163}>
                                <Svg style={styles.________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                    <Path d="M5.98706 11.9741C7.31543 11.9739 8.60551 11.5292 9.65189 10.7109L12.9418 14.0007L14 12.9425L10.7101 9.65264C11.5288 8.60615 11.9738 7.31577 11.9741 5.98706C11.9741 2.68595 9.28818 0 5.98706 0C2.68595 0 0 2.68595 0 5.98706C0 9.28818 2.68595 11.9741 5.98706 11.9741ZM5.98706 1.49677C8.46346 1.49677 10.4774 3.51066 10.4774 5.98706C10.4774 8.46346 8.46346 10.4774 5.98706 10.4774C3.51066 10.4774 1.49677 8.46346 1.49677 5.98706C1.49677 3.51066 3.51066 1.49677 5.98706 1.49677Z" fill="#9A9FAE" />
                                </Svg>
                                <Text style={styles.findfoodtrucks}>
                                    {`Find food trucks`}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.hungry}>
                        <Text style={styles.__search}>
                            {`Search`}
                        </Text>
                    </View>
                    <Svg style={styles.back} width="56" height="56" viewBox="0 0 56 56" fill="none" >
                        <G filter="url(#filter0_d_59_328)">
                            <Path d="M34.6316 6H21.3684C15.0898 6 10 11.0898 10 17.3684V30.6316C10 36.9102 15.0898 42 21.3684 42H34.6316C40.9102 42 46 36.9102 46 30.6316V17.3684C46 11.0898 40.9102 6 34.6316 6Z" fill="white" />
                        </G>
                        <Path d="M30.8421 19.2632L26.1053 23.7006L30.6678 28.2632" stroke="#1A1D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <Defs>
                            <Filter id="filter0_d_59_328" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                                <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <FeOffset dy="4" />
                                <FeGaussianBlur stdDeviation="5" />
                                <FeColorMatrix type="matrix" values="0 0 0 0 0.576471 0 0 0 0 0.658824 0 0 0 0 0.678431 0 0 0 0.5 0" />
                                <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_59_328" />
                                <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_59_328" result="shape" />
                            </Filter>
                        </Defs>
                    </Svg>
                    <View style={styles.group7201}>
                        <Svg style={styles.rectangle219} width="327" height="50" viewBox="0 0 327 50" fill="none" >
                            <Path opacity="0.1" d="M0 20C0 10.5719 0 5.85786 2.92893 2.92893C5.85786 0 10.5719 0 20 0H307C316.428 0 321.142 0 324.071 2.92893C327 5.85786 327 10.5719 327 20V30C327 39.4281 327 44.1421 324.071 47.0711C321.142 50 316.428 50 307 50H20C10.5719 50 5.85786 50 2.92893 47.0711C0 44.1421 0 39.4281 0 30V20Z" fill="white" />
                        </Svg>

                        {/* RN-Flow:: can be replaced with <FilledActionCreditcard  /> */}
                        <View style={styles.filledActionCreditcard}>
                            <Svg style={styles.vector} width="17" height="14" viewBox="0 0 17 14" fill="none" >
                                <Path d="M15.2687 0.333332H2.25376C1.35085 0.333332 0.635026 1.075 0.635026 2L0.626892 12C0.626892 12.925 1.35085 13.6667 2.25376 13.6667H15.2687C16.1716 13.6667 16.8955 12.925 16.8955 12V2C16.8955 1.075 16.1716 0.333332 15.2687 0.333332ZM15.2687 12H2.25376V7H15.2687V12ZM15.2687 3.66667H2.25376V2H15.2687V3.66667Z" fill="#335C67" />
                            </Svg>

                        </View>
                        <Text style={styles.paymentMethods}>
                            {`Payment Methods`}
                        </Text>
                    </View>
                    <View style={styles.group7200}>
                        <Svg style={styles.rectangle220} width="327" height="50" viewBox="0 0 327 50" fill="none" >
                            <Path opacity="0.1" d="M0 20C0 10.5719 0 5.85786 2.92893 2.92893C5.85786 0 10.5719 0 20 0H307C316.428 0 321.142 0 324.071 2.92893C327 5.85786 327 10.5719 327 20V30C327 39.4281 327 44.1421 324.071 47.0711C321.142 50 316.428 50 307 50H20C10.5719 50 5.85786 50 2.92893 47.0711C0 44.1421 0 39.4281 0 30V20Z" fill="white" />
                        </Svg>

                        <Text style={styles.profile}>
                            {`Profile`}
                        </Text>
                    </View>
                    <View style={styles.group7198}>
                        <Svg style={styles.rectangle222} width="327" height="50" viewBox="0 0 327 50" fill="none" >
                            <Path opacity="0.1" d="M0 20C0 10.5719 0 5.85786 2.92893 2.92893C5.85786 0 10.5719 0 20 0H307C316.428 0 321.142 0 324.071 2.92893C327 5.85786 327 10.5719 327 20V30C327 39.4281 327 44.1421 324.071 47.0711C321.142 50 316.428 50 307 50H20C10.5719 50 5.85786 50 2.92893 47.0711C0 44.1421 0 39.4281 0 30V20Z" fill="white" />
                        </Svg>

                        <Text style={styles.about}>
                            {`About`}
                        </Text>
                    </View>
                    <View style={styles.group7199}>
                        <Svg style={styles.rectangle221} width="327" height="50" viewBox="0 0 327 50" fill="none" >
                            <Path opacity="0.1" d="M0 20C0 10.5719 0 5.85786 2.92893 2.92893C5.85786 0 10.5719 0 20 0H307C316.428 0 321.142 0 324.071 2.92893C327 5.85786 327 10.5719 327 20V30C327 39.4281 327 44.1421 324.071 47.0711C321.142 50 316.428 50 307 50H20C10.5719 50 5.85786 50 2.92893 47.0711C0 44.1421 0 39.4281 0 30V20Z" fill="white" />
                        </Svg>

                        <Svg style={styles.group} width="16" height="16" viewBox="0 0 16 16" fill="none" >
                            <Path d="M13.7317 8.78333C13.765 8.53333 13.7817 8.275 13.7817 8C13.7817 7.73333 13.765 7.46667 13.7233 7.21667L15.415 5.9C15.565 5.78333 15.6067 5.55833 15.515 5.39167L13.915 2.625C13.815 2.44167 13.6067 2.38333 13.4233 2.44167L11.4317 3.24167C11.015 2.925 10.5733 2.65833 10.0817 2.45833L9.78167 0.341667C9.74833 0.141667 9.58167 0 9.38167 0H6.18167C5.98167 0 5.82333 0.141667 5.79 0.341667L5.49 2.45833C4.99833 2.65833 4.54833 2.93333 4.14 3.24167L2.14833 2.44167C1.965 2.375 1.75667 2.44167 1.65667 2.625L0.0650003 5.39167C-0.0349997 5.56667 -0.00166647 5.78333 0.165 5.9L1.85667 7.21667C1.815 7.46667 1.78167 7.74167 1.78167 8C1.78167 8.25833 1.79833 8.53333 1.84 8.78333L0.148334 10.1C-0.00166646 10.2167 -0.043333 10.4417 0.0483336 10.6083L1.64833 13.375C1.74833 13.5583 1.95667 13.6167 2.14 13.5583L4.13167 12.7583C4.54833 13.075 4.99 13.3417 5.48167 13.5417L5.78167 15.6583C5.82333 15.8583 5.98167 16 6.18167 16H9.38167C9.58167 16 9.74833 15.8583 9.77333 15.6583L10.0733 13.5417C10.565 13.3417 11.015 13.075 11.4233 12.7583L13.415 13.5583C13.5983 13.625 13.8067 13.5583 13.9067 13.375L15.5067 10.6083C15.6067 10.425 15.565 10.2167 15.4067 10.1L13.7317 8.78333ZM7.78167 11C6.13167 11 4.78167 9.65 4.78167 8C4.78167 6.35 6.13167 5 7.78167 5C9.43167 5 10.7817 6.35 10.7817 8C10.7817 9.65 9.43167 11 7.78167 11Z" fill="#335C67" />
                        </Svg>

                        {/* RN-Flow:: can be replaced with <Error_outline_black_24dp2  /> */}
                        <View style={styles.error_outline_black_24dp2}>
                            <Svg style={styles._vector} width="17" height="18" viewBox="0 0 17 18" fill="none" >
                                <Path d="M9.57461 6.50001L7.94775 6.50001L7.94775 4.83334L9.57461 4.83334L9.57461 6.50001ZM9.57461 13.1667L7.94775 13.1667L7.94775 8.16668L9.57461 8.16668L9.57461 13.1667ZM8.76931 17.3333C13.2595 17.3333 16.8955 13.6 16.8955 9.00001C16.8955 4.40001 13.2595 0.666676 8.76931 0.666677C4.27103 0.666677 0.626849 4.40001 0.62685 9.00001C0.62685 13.6 4.27103 17.3333 8.76931 17.3333ZM8.76118 2.33334C12.3566 2.33334 15.2686 5.31668 15.2686 9.00001C15.2686 12.6833 12.3566 15.6667 8.76118 15.6667C5.16581 15.6667 2.25372 12.6833 2.25372 9.00001C2.25372 5.31668 5.1658 2.33334 8.76118 2.33334Z" fill="#335C67" />
                            </Svg>

                        </View>
                        <Text style={styles.settings}>
                            {`Settings`}
                        </Text>
                    </View>
                    <View style={styles.frame8}>
                        <Svg style={styles.__vector} width="88" height="88" viewBox="0 0 88 88" fill="none" >
                            <Path d="M44 0C39.1653 0 34.4393 1.35819 30.4194 3.90281C26.3995 6.44743 23.2664 10.0642 21.4163 14.2958C19.5661 18.5273 19.0821 23.1836 20.0253 27.6758C20.9684 32.168 23.2966 36.2943 26.7152 39.533C30.1338 42.7717 34.4894 44.9773 39.2311 45.8708C43.9729 46.7644 48.8879 46.3058 53.3545 44.553C57.8211 42.8002 61.6388 39.832 64.3248 36.0237C67.0108 32.2154 68.4445 27.7381 68.4445 23.1579C68.4445 17.016 65.8691 11.1257 61.2848 6.78279C56.7006 2.43984 50.4831 0 44 0ZM44 37.0526C41.0992 37.0526 38.2636 36.2377 35.8516 34.7109C33.4397 33.1842 31.5599 31.0141 30.4498 28.4752C29.3397 25.9363 29.0492 23.1425 29.6151 20.4472C30.1811 17.7519 31.5779 15.276 33.6291 13.3328C35.6803 11.3896 38.2936 10.0663 41.1387 9.53014C43.9837 8.99401 46.9327 9.26917 49.6127 10.3208C52.2927 11.3725 54.5833 13.1534 56.1949 15.4384C57.8065 17.7234 58.6667 20.4098 58.6667 23.1579C58.6667 26.843 57.1214 30.3772 54.3709 32.983C51.6204 35.5887 47.8898 37.0526 44 37.0526ZM88 88V83.3684C88 74.7698 84.3945 66.5234 77.9765 60.4433C71.5586 54.3632 62.8541 50.9474 53.7778 50.9474H34.2222C25.1459 50.9474 16.4414 54.3632 10.0235 60.4433C3.60554 66.5234 0 74.7698 0 83.3684V88H9.77778V83.3684C9.77778 77.2266 12.3532 71.3363 16.9374 66.9933C21.5216 62.6504 27.7392 60.2105 34.2222 60.2105H53.7778C60.2609 60.2105 66.4784 62.6504 71.0626 66.9933C75.6468 71.3363 78.2222 77.2266 78.2222 83.3684V88H88Z" fill="#EBEBEB" />
                        </Svg>

                    </View>
                    <View style={styles.frame9}>
                        <Svg style={styles.___vector} width="10" height="10" viewBox="0 0 10 10" fill="none" >
                            <Path d="M5 0C4.45061 0 3.91355 0.154339 3.45675 0.443501C2.99995 0.732663 2.64391 1.14366 2.43367 1.62452C2.22342 2.10538 2.16842 2.6345 2.2756 3.14497C2.38278 3.65545 2.64734 4.12435 3.03581 4.49239C3.42429 4.86042 3.91925 5.11105 4.45808 5.21259C4.99692 5.31413 5.55544 5.26202 6.06301 5.06284C6.57058 4.86366 7.00441 4.52637 7.30964 4.09361C7.61487 3.66085 7.77778 3.15206 7.77778 2.63158C7.77778 1.93364 7.48512 1.26429 6.96419 0.770772C6.44325 0.277255 5.73671 0 5 0ZM5 4.21053C4.67036 4.21053 4.34813 4.11792 4.07405 3.94443C3.79997 3.77093 3.58635 3.52433 3.4602 3.23582C3.33405 2.9473 3.30105 2.62983 3.36536 2.32354C3.42967 2.01726 3.5884 1.73591 3.82149 1.51509C4.05458 1.29427 4.35155 1.14389 4.67485 1.08297C4.99815 1.02205 5.33326 1.05332 5.63781 1.17282C5.94235 1.29233 6.20265 1.49471 6.38578 1.75436C6.56892 2.01402 6.66667 2.31929 6.66667 2.63158C6.66667 3.05034 6.49107 3.45195 6.17851 3.74806C5.86595 4.04417 5.44203 4.21053 5 4.21053ZM10 10V9.47368C10 8.49657 9.59028 7.55948 8.86097 6.86855C8.13166 6.17763 7.14251 5.78947 6.11111 5.78947H3.88889C2.85749 5.78947 1.86834 6.17763 1.13903 6.86855C0.409721 7.55948 0 8.49657 0 9.47368V10H1.11111V9.47368C1.11111 8.77575 1.40377 8.10639 1.9247 7.61288C2.44564 7.11936 3.15218 6.84211 3.88889 6.84211H6.11111C6.84782 6.84211 7.55436 7.11936 8.0753 7.61288C8.59623 8.10639 8.88889 8.77575 8.88889 9.47368V10H10Z" fill="white" />
                        </Svg>

                    </View>
                    <Text style={styles.johnDoe}>
                        {`John Doe`}
                    </Text>
                    <Text style={styles.exampleemailcom}>
                        {`example@email.com`}
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.navbar}>
                <View style={styles.frame1}>
                    <View style={styles.frame2}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <View style={styles.group18166}>
                                <Svg style={styles._________vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
                                    <Path d="M1.99992 20H15.9993C16.5298 20 17.0384 19.7893 17.4135 19.4142C17.7886 19.0392 17.9993 18.5305 17.9993 18.0001V9.00044C18 8.86883 17.9748 8.73838 17.925 8.61654C17.8753 8.49471 17.802 8.3839 17.7093 8.29046L9.70961 0.290781C9.52225 0.104538 9.26881 0 9.00463 0C8.74046 0 8.48702 0.104538 8.29966 0.290781L0.299988 8.29046C0.205503 8.38307 0.130337 8.49352 0.0788421 8.61539C0.0273475 8.73726 0.000549228 8.86813 0 9.00044V18.0001C0 18.5305 0.210705 19.0392 0.585763 19.4142C0.96082 19.7893 1.46951 20 1.99992 20ZM6.99972 18.0001V13.0003H10.9996V18.0001H6.99972ZM1.99992 9.41042L8.99963 2.4107L15.9993 9.41042V18.0001H12.9995V13.0003C12.9995 12.4699 12.7888 11.9612 12.4137 11.5861C12.0387 11.2111 11.53 11.0004 10.9996 11.0004H6.99972C6.4693 11.0004 5.96062 11.2111 5.58556 11.5861C5.2105 11.9612 4.9998 12.4699 4.9998 13.0003V18.0001H1.99992V9.41042Z" fill="white" />
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
                                    <Path d="M8.50017 12.0001C10.7062 12.0001 12.5002 10.2061 12.5002 8.00009C12.5002 5.79408 10.7062 4.00006 8.50017 4.00006C6.29415 4.00006 4.50014 5.79408 4.50014 8.00009C4.50014 10.2061 6.29415 12.0001 8.50017 12.0001ZM8.50017 6.00008C9.60318 6.00008 10.5002 6.89708 10.5002 8.00009C10.5002 9.1031 9.60318 10.0001 8.50017 10.0001C7.39716 10.0001 6.50015 9.1031 6.50015 8.00009C6.50015 6.89708 7.39716 6.00008 8.50017 6.00008Z" fill="white" />
                                    <Path d="M7.92015 19.8142C8.0894 19.935 8.29218 20 8.50015 20C8.70813 20 8.91091 19.935 9.08016 19.8142C9.38416 19.5992 16.5292 14.4401 16.5002 8.00006C16.5002 3.58903 12.9112 0 8.50015 0C4.08912 0 0.500088 3.58903 0.500088 7.99506C0.471088 14.4401 7.61615 19.5992 7.92015 19.8142ZM8.50015 2.00002C11.8092 2.00002 14.5002 4.69104 14.5002 8.00506C14.5212 12.4431 10.1122 16.4281 8.50015 17.7351C6.88914 16.4271 2.4791 12.4411 2.5001 8.00006C2.5001 4.69104 5.19113 2.00002 8.50015 2.00002Z" fill="white" />
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
                                <Svg style={styles.__________vector} width="18" height="20" viewBox="0 0 18 20" fill="none" >
                                    <Path d="M2 20H16C17.103 20 18 19.103 18 18V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H14V5C14 2.243 11.757 0 9 0C6.243 0 4 2.243 4 5V6H1C0.734783 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7V18C0 19.103 0.897 20 2 20ZM6 5C6 3.346 7.346 2 9 2C10.654 2 12 3.346 12 5V6H6V5ZM2 8H4V10H6V8H12V10H14V8H16L16.002 18H2V8Z" fill="white" />
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
                                <Svg style={styles.___________vector} width="20" height="20" viewBox="0 0 20 20" fill="none" >
                                    <Path d="M10 0C8.95904 0 7.94147 0.308679 7.07594 0.887002C6.21042 1.46533 5.53583 2.28732 5.13747 3.24903C4.73912 4.21075 4.63489 5.269 4.83797 6.28995C5.04105 7.3109 5.54232 8.24871 6.27838 8.98477C7.01445 9.72084 7.95225 10.2221 8.97321 10.4252C9.99416 10.6283 11.0524 10.524 12.0141 10.1257C12.9758 9.72733 13.7978 9.05273 14.3762 8.18721C14.9545 7.32169 15.2632 6.30411 15.2632 5.26316C15.2632 3.86728 14.7086 2.52858 13.7216 1.54154C12.7346 0.55451 11.3959 0 10 0ZM10 8.42105C9.37543 8.42105 8.76488 8.23585 8.24557 7.88885C7.72625 7.54186 7.3215 7.04866 7.08248 6.47163C6.84347 5.8946 6.78093 5.25965 6.90278 4.64708C7.02463 4.03451 7.32539 3.47183 7.76703 3.03019C8.20867 2.58855 8.77135 2.28779 9.38392 2.16594C9.9965 2.04409 10.6314 2.10663 11.2085 2.34564C11.7855 2.58466 12.2787 2.98941 12.6257 3.50873C12.9727 4.02804 13.1579 4.63859 13.1579 5.26316C13.1579 6.10068 12.8252 6.90391 12.233 7.49613C11.6407 8.08835 10.8375 8.42105 10 8.42105ZM19.4737 20V18.9474C19.4737 16.9931 18.6974 15.119 17.3155 13.7371C15.9337 12.3553 14.0595 11.5789 12.1053 11.5789H7.89474C5.94051 11.5789 4.06632 12.3553 2.68447 13.7371C1.30263 15.119 0.526314 16.9931 0.526314 18.9474V20H2.63158V18.9474C2.63158 17.5515 3.18609 16.2128 4.17312 15.2258C5.16015 14.2387 6.49886 13.6842 7.89474 13.6842H12.1053C13.5011 13.6842 14.8398 14.2387 15.8269 15.2258C16.8139 16.2128 17.3684 17.5515 17.3684 18.9474V20H19.4737Z" fill="white" />
                                </Svg>

                                <Text style={styles._account}>
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
    search: {
    flexShrink: 0,
    height: 812,
    width: 375,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 10,
    padding: 10
    },
    tucosTacos: {
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
    taco2Go: {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20
    },
    pexelsphoto141799841: {
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
    width: 290
    },
    group18172: {
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
    _pexelsphoto141799841: {
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
    width: 288
    },
    _group18172: {
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
    _group18169: {
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
    _search: {
    position: "absolute",
    flexShrink: 0,
    top: 88,
    height: 36,
    left: 24,
    right: 24,
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
    width: 132
    },
    ________vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    width: 14,
    height: 14,
    overflow: "visible"
    },
    findfoodtrucks: {
    position: "absolute",
    flexShrink: 0,
    left: 20,
    width: 112,
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
    top: 38,
    height: 31,
    left: 76,
    width: 113,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0
    },
    __search: {
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
    back: {
    position: "absolute",
    flexShrink: 0,
    top: 36,
    height: 36,
    left: 24,
    width: 36
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
    _________vector: {
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
    __________vector: {
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
    ___________vector: {
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