import { numero } from "./nonPprByPos";

const rawTop300 = `1. (RB1) Christian McCaffrey, CAR $62 13 81. (QB8) Justin Herbert, LAC $4 7 161. (WR72) Gabriel Davis, BUF $0 7 241. (RB78) Kenneth Gainwell, PHI $0 14
2. (RB2) Dalvin Cook, MIN $59 7 82. (TE7) Logan Thomas, WAS $4 9 162. (WR73) Terrace Marshall Jr., CAR $0 13 242. (RB79) La'Mical Perine, NYJ $0 6
3. (RB3) Saquon Barkley, NYG $59 10 83. (TE8) Noah Fant, DEN $4 11 163. (TE19) Adam Trautman, NO $0 6 243. (QB24) Derek Carr, LV $0 8
4. (TE1) Travis Kelce, KC $58 12 84. (WR40) Deebo Samuel, SF $4 6 164. (TE20) Cole Kmet, CHI $0 10 244. (QB25) Jared Goff, DET $0 9
5. (RB4) Alvin Kamara, NO $56 6 85. (WR41) DeVonta Smith, PHI $4 14 165. (QB18) Daniel Jones, NYG $0 10 245. (QB26) Zach Wilson, NYJ $0 6
6. (RB5) Derrick Henry, TEN $53 13 86. (WR42) Curtis Samuel, WAS $4 9 166. (QB19) Baker Mayfield, CLE $0 13 246. (TE23) Jared Cook, LAC $0 7
7. (RB6) Ezekiel Elliott, DAL $51 7 87. (WR43) Marquise Brown, BAL $3 8 167. (QB20) Kirk Cousins, MIN $0 7 247. (TE24) Zach Ertz, PHI $0 14
8. (RB7) Jonathan Taylor, IND $50 14 88. (WR44) Jarvis Landry, CLE $3 13 168. (TE21) Anthony Firkser, TEN $0 13 248. (TE25) Blake Jarwin, DAL $0 7
9. (WR1) Davante Adams, GB $48 13 89. (WR45) Antonio Brown, TB $3 9 169. (DST1) Buccaneers D/ST, TB $1 9 249. (TE26) Gerald Everett, SEA $0 9
10. (WR2) Tyreek Hill, KC $46 12 90. (QB9) Tom Brady, TB $3 9 170. (DST2) Steelers D/ST, PIT $1 7 250. (RB80) Javian Hawkins, ATL $0 6
11. (RB8) Austin Ekeler, LAC $45 7 91. (RB29) Damien Harris, NE $3 14 171. (DST3) Ravens D/ST, BAL $1 8 251. (WR91) Quintez Cephus, DET $0 9
12. (WR3) Stefon Diggs, BUF $45 7 92. (RB30) Raheem Mostert, SF $3 6 172. (DST4) Bills D/ST, BUF $1 7 252. (WR92) Dyami Brown, WAS $0 9
13. (RB9) Aaron Jones, GB $44 13 93. (WR46) Jaylen Waddle, MIA $3 14 173. (DST5) WFT D/ST, WAS $1 9 253. (DST15) Vikings D/ST, MIN $0 7
14. (RB10) Nick Chubb, CLE $43 13 94. (WR47) Henry Ruggs III, LV $3 8 174. (DST6) 49ers D/ST, SF $1 6 254. (DST16) Bears D/ST, CHI $0 10
15. (RB11) Antonio Gibson, WAS $42 9 95. (WR48) Corey Davis, NYJ $3 6 175. (DST7) Broncos D/ST, DEN $1 11 255. (K15) Cody Parkey, CLE $0 13
16. (RB12) Najee Harris, PIT $40 7 96. (WR49) Marvin Jones Jr., JAC $2 7 176. (DST8) Rams D/ST, LAR $1 11 256. (K16) Ryan Succop, TB $0 9
17. (WR4) DeAndre Hopkins, ARI $38 12 97. (WR50) Mike Williams, LAC $2 7 177. (DST9) Patriots D/ST, NE $1 14 257. (TE27) O.J. Howard, TB $0 9
18. (RB13) Joe Mixon, CIN $37 10 98. (WR51) Jalen Reagor, PHI $2 14 178. (DST10) Browns D/ST, CLE $1 13 258. (TE28) Jordan Akins, HOU $0 10
19. (RB14) Clyde Edwards-Helaire, KC $36 12 99. (WR52) Cole Beasley, BUF $2 7 179. (DST11) Colts D/ST, IND $0 14 259. (TE29) Chris Herndon, NYJ $0 6
20. (WR5) Calvin Ridley, ATL $35 6 100. (RB31) Zack Moss, BUF $2 7 180. (DST12) Saints D/ST, NO $0 6 260. (WR93) Anthony Miller, HOU $0 10
21. (WR6) DK Metcalf, SEA $34 9 101. (RB32) Leonard Fournette, TB $2 9 181. (K1) Harrison Butker, KC $1 12 261. (WR94) Tutu Atwell, LAR $0 11
22. (RB15) David Montgomery, CHI $33 10 102. (RB33) Kenyan Drake, LV $2 8 182. (K2) Justin Tucker, BAL $1 8 262. (WR95) Josh Palmer, LAC $0 7
23. (RB16) D'Andre Swift, DET $32 9 103. (RB34) Melvin Gordon, DEN $2 11 183. (K3) Jason Myers, SEA $1 9 263. (WR96) DeSean Jackson, LAR $0 11
24. (WR7) A.J. Brown, TEN $32 13 104. (QB10) Ryan Tannehill, TEN $2 13 184. (K4) Brandon McManus, DEN $1 11 264. (RB81) Kerryon Johnson, PHI $0 14
25. (WR8) Justin Jefferson, MIN $31 7 105. (QB11) Jalen Hurts, PHI $2 14 185. (K5) Jason Sanders, MIA $1 14 265. (RB82) Benny Snell Jr., PIT $0 7
26. (WR9) Terry McLaurin, WAS $30 9 106. (TE9) Dallas Goedert, PHI $2 14 186. (K6) Younghoe Koo, ATL $1 6 266. (QB27) Jameis Winston, NO $0 6
27. (WR10) Keenan Allen, LAC $30 7 107. (TE10) Robert Tonyan, GB $2 13 187. (K7) Matt Gay, LAR $1 11 267. (QB28) Carson Wentz, IND $0 14
28. (RB17) Miles Sanders, PHI $29 14 108. (TE11) Mike Gesicki, MIA $2 14 188. (K8) Graham Gano, NYG $1 10 268. (QB29) Cam Newton, NE $0 14
29. (RB18) J.K. Dobbins, BAL $28 8 109. (TE12) Jonnu Smith, NE $2 14 189. (K9) Greg Zuerlein, DAL $1 7 269. (QB30) Deshaun Watson, HOU $0 10
30. (RB19) Chris Carson, SEA $26 9 110. (RB35) AJ Dillon, GB $2 13 190. (K10) Tyler Bass, BUF $1 7 270. (QB31) Sam Darnold, CAR $0 13
31. (WR11) Allen Robinson II, CHI $26 10 111. (RB36) Michael Carter, NYJ $2 6 191. (K11) Josh Lambo, JAC $0 7 271. (WR97) Keelan Cole, NYJ $0 6
32. (WR12) CeeDee Lamb, DAL $25 7 112. (RB37) James Conner, ARI $2 12 192. (K12) Matt Prater, ARI $0 12 272. (WR98) Chris Conley, HOU $0 10
33. (WR13) Robert Woods, LAR $24 11 113. (RB38) Jamaal Williams, DET $2 9 193. (WR74) Emmanuel Sanders, BUF $0 7 273. (WR99) Tim Patrick, DEN $0 11
34. (WR14) Mike Evans, TB $23 9 114. (RB39) David Johnson, HOU $2 10 194. (RB55) Rashaad Penny, SEA $0 9 274. (WR100) Olamide Zaccheaus, ATL $0 6
35. (WR15) Amari Cooper, DAL $22 7 115. (QB12) Matthew Stafford, LAR $2 11 195. (RB56) Devontae Booker, NYG $0 10 275. (WR101) Keke Coutee, HOU $0 10
36. (TE2) Darren Waller, LV $22 8 116. (WR53) T.Y. Hilton, IND $2 14 196. (RB57) Sony Michel, NE $0 14 276. (RB83) Cordarrelle Patterson, ATL $0 6
37. (TE3) George Kittle, SF $22 6 117. (WR54) Mecole Hardman, KC $2 12 197. (RB58) Damien Williams, CHI $0 10 277. (RB84) Carlos Hyde, JAC $0 7
38. (RB20) Josh Jacobs, LV $21 8 118. (WR55) DeVante Parker, MIA $2 14 198. (RB59) Chuba Hubbard, CAR $0 13 278. (RB85) Kyle Juszczyk, SF $0 6
39. (RB21) Darrell Henderson Jr., LAR $21 11 119. (TE13) Irv Smith Jr., MIN $2 7 199. (RB60) Tevin Coleman, NYJ $0 6 279. (RB86) Jalen Richard, LV $0 8
40. (WR16) Adam Thielen, MIN $20 7 120. (TE14) Tyler Higbee, LAR $2 11 200. (RB61) Darrel Williams, KC $0 12 280. (RB87) Chris Evans, CIN $0 10
41. (WR17) Chris Godwin, TB $19 9 121. (TE15) Hunter Henry, NE $1 14 201. (RB62) Ty Johnson, NYJ $0 6 281. (RB88) Larry Rountree III, LAC $0 7
42. (WR18) Diontae Johnson, PIT $19 7 122. (TE16) Evan Engram, NYG $1 10 202. (RB63) Justin Jackson, LAC $0 7 282. (RB89) Ito Smith, ARI $0 12
43. (RB22) Myles Gaskin, MIA $18 14 123. (RB40) Ronald Jones II, TB $1 9 203. (RB64) Salvon Ahmed, MIA $0 14 283. (RB90) Peyton Barber, WAS $0 9
44. (WR19) Julio Jones, TEN $17 13 124. (RB41) Trey Sermon, SF $1 6 204. (RB65) Marlon Mack, IND $0 14 284. (WR102) James Washington, PIT $0 7
45. (WR20) DJ Moore, CAR $17 13 125. (RB42) Nyheim Hines, IND $1 14 205. (RB66) Boston Scott, PHI $0 14 285. (DST17) Giants D/ST, NYG $0 10
46. (WR21) Tyler Lockett, SEA $15 9 126. (RB43) Devin Singletary, BUF $1 7 206. (RB67) Rhamondre Stevenson, NE $0 14 286. (DST18) Cardinals D/ST, ARI $0 12
47. (WR22) Cooper Kupp, LAR $15 11 127. (RB44) J.D. McKissic, WAS $1 9 207. (RB68) Wayne Gallman, SF $0 6 287. (K17) Robbie Gould, SF $0 6
48. (WR23) Brandon Aiyuk, SF $14 6 128. (QB13) Joe Burrow, CIN $1 10 208. (RB69) Malcolm Brown, MIA $0 14 288. (K18) Dustin Hopkins, WAS $0 9
49. (WR24) Kenny Golladay, NYG $13 10 129. (QB14) Trevor Lawrence, JAC $1 7 209. (RB70) Mark Ingram II, HOU $0 10 289. (TE30) Jack Doyle, IND $0 14
50. (WR25) Courtland Sutton, DEN $13 11 130. (WR56) Darnell Mooney, CHI $1 10 210. (RB71) Samaje Perine, CIN $0 10 290. (TE31) C.J. Uzomah, CIN $0 10
51. (WR26) Tee Higgins, CIN $12 10 131. (WR57) Parris Campbell, IND $1 14 211. (TE22) Austin Hooper, CLE $0 13 291. (TE32) Dawson Knox, BUF $0 7
52. (WR27) Ja'Marr Chase, CIN $11 10 132. (WR58) Elijah Moore, NYJ $1 6 212. (QB21) Ryan Fitzpatrick, WAS $0 9 292. (TE33) Hayden Hurst, ATL $0 6
53. (WR28) Odell Beckham Jr., CLE $11 13 133. (WR59) Jakobi Meyers, NE $1 14 213. (WR75) Tre'Quan Smith, NO $0 6 293. (TE34) Dan Arnold, CAR $0 13
54. (TE4) Mark Andrews, BAL $10 8 134. (WR60) Michael Pittman Jr., IND $1 14 214. (WR76) John Brown, LV $0 8 294. (WR103) Deonte Harris, NO $0 6
55. (QB1) Patrick Mahomes, KC $10 12 135. (WR61) Nelson Agholor, NE $1 14 215. (WR77) Kadarius Toney, NYG $0 10 295. (WR104) Marquez Valdes-Scantling, GB$0 13
56. (QB2) Josh Allen, BUF $10 7 136. (RB45) James White, NE $1 14 216. (WR78) Amon-Ra St. Brown, DET $0 9 296. (QB32) Drew Lock, DEN $0 11
57. (WR29) JuJu Smith-Schuster, PIT $10 7 137. (RB46) Gus Edwards, BAL $1 8 217. (WR79) Sammy Watkins, BAL $0 8 297. (DST19) Jets D/ST, NYJ $0 6
58. (WR30) Robby Anderson, CAR $9 13 138. (RB47) Tony Pollard, DAL $1 7 218. (WR80) D'Wayne Eskridge, SEA $0 9 298. (DST20) Chiefs D/ST, KC $0 12
59. (WR31) Chase Claypool, PIT $9 7 139. (RB48) Alexander Mattison, MIN $1 7 219. (QB22) Justin Fields, CHI $0 10 299. (DST21) Titans D/ST, TEN $0 13
60. (WR32) Will Fuller V, MIA $9 14 140. (RB49) Latavius Murray, NO $1 6 220. (QB23) Trey Lance, SF $0 6 300. (DST22) Falcons D/ST, ATL $0 6
61. (QB3) Kyler Murray, ARI $8 12 141. (RB50) Phillip Lindsay, HOU $0 10 221. (DST13) Packers D/ST, GB $0 13
62. (RB23) Chase Edmonds, ARI $8 12 142. (RB51) Giovani Bernard, TB $0 9 222. (DST14) Dolphins D/ST, MIA $0 14
63. (RB24) Travis Etienne, JAC $8 7 143. (TE17) Rob Gronkowski, TB $0 9 223. (K13) Daniel Carlson, LV $0 8
64. (RB25) Javonte Williams, DEN $7 11 144. (TE18) Eric Ebron, PIT $0 7 224. (K14) Nick Folk, NE $0 14
65. (WR33) Jerry Jeudy, DEN $7 11 145. (QB15) Tua Tagovailoa, MIA $0 14 225. (WR81) Nico Collins, HOU $0 10
66. (WR34) Laviska Shenault Jr., JAC $7 7 146. (QB16) Matt Ryan, ATL $0 6 226. (WR82) Bryan Edwards, LV $0 8
67. (QB4) Dak Prescott, DAL $7 7 147. (QB17) Ben Roethlisberger, PIT $0 7 227. (WR83) Christian Kirk, ARI $0 12
68. (QB5) Lamar Jackson, BAL $6 8 148. (WR62) Jamison Crowder, NYJ $0 6 228. (WR84) Allen Lazard, GB $0 13
69. (WR35) Brandin Cooks, HOU $6 10 149. (WR63) Russell Gage, ATL $0 6 229. (WR85) Darius Slayton, NYG $0 10
70. (WR36) DJ Chark Jr., JAC $6 7 150. (WR64) Marquez Callaway, NO $0 6 230. (WR86) Van Jefferson, LAR $0 11 8
71. (WR37) Tyler Boyd, CIN $6 10 151. (WR65) Rondale Moore, ARI $0 12 231. (WR87) KJ Hamler, DEN $0 11
72. (WR38) Michael Gallup, DAL $6 7 152. (WR66) Rashod Bateman, BAL $0 8 232. (WR88) Denzel Mims, NYJ $0 6
73. (TE5) T.J. Hockenson, DET $6 9 153. (WR67) Breshad Perriman, DET $0 9 233. (WR89) Demarcus Robinson, KC $0 12
74. (TE6) Kyle Pitts, ATL $5 6 154. (WR68) Tyrell Williams, DET $0 9 234. (WR90) Byron Pringle, KC $0 12
75. (WR39) Michael Thomas, NO $5 6 155. (WR69) A.J. Green, ARI $0 12 235. (RB72) DeeJay Dallas, SEA $0 9 11
76. (RB26) Kareem Hunt, CLE $5 13 156. (WR70) Sterling Shepard, NYG $0 10 236. (RB73) Jake Funk, LAR $0 11 12
77. (RB27) James Robinson, JAC $5 7 157. (RB52) Darrynton Evans, TEN $0 13 237. (RB74) Joshua Kelley, LAC $0 7
78. (RB28) Mike Davis, ATL $4 6 158. (RB53) Tarik Cohen, CHI $0 10 238. (RB75) Qadree Ollison, ATL $0 6
79. (QB6) Aaron Rodgers, GB $4 13 159. (RB54) Xavier Jones, LAR $0 11 239. (RB76) Rex Burkhead, HOU $0 10
80. (QB7) Russell Wilson, SEA $4 9 160. (WR71) Randall Cobb, GB $0 13 240. (RB77) Brian Hill, TEN $0 13`;

const _top300 = rawTop300.replace(/\n/g, "").split(numero);
export const parens = /\(([^()]+)\)/g;

export const top300 = _top300.slice(1, _top300.length).map((str) => {
  const _posRank = str.match(parens);
  const posRank = Array.isArray(_posRank)
    ? parseInt(_posRank[0].replace(/\D/g, ""))
    : 999;
  const pos = Array.isArray(_posRank)
    ? _posRank[0].replace(/[^a-z]/gi, "")
    : "SCRUB";
  const split = str.replace(parens, "").split(",");
  const name = split[0].trim();
  const details = split[1].trim().split(" ");
  const short = details[0];
  const value = details[1] ? parseInt(details[1].replace("$", "")) : 0;
  //console.log(name, posRank, pos, short, value);
  return { name, posRank, pos, short, value };
});
// lines.forEach((line,i)=>{
//     console.log(line)
// })
