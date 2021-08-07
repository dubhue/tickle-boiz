import { numero } from "./nonPprByPos";

const rawTop300 = `1. (RB1) Christian McCaffrey, CAR $62 13 81. (QB8) Justin Herbert, LAC $4 7 161. (RB58) Devontae Booker, NYG $0 10 241. (RB78) Qadree Ollison, ATL $0 6
2. (RB2) Dalvin Cook, MIN $59 7 82. (TE7) Logan Thomas, WAS $4 9 162. (RB59) Sony Michel, NE $0 14 242. (RB79) Cordarrelle Patterson, ATL $0 6
3. (RB3) Derrick Henry, TEN $59 13 83. (TE8) Dallas Goedert, PHI $4 14 163. (TE19) Austin Hooper, CLE $0 13 243. (QB24) Trey Lance, SF $0 6
4. (TE1) Travis Kelce, KC $58 12 84. (WR40) Curtis Samuel, WAS $4 9 164. (TE20) Adam Trautman, NO $0 6 244. (QB25) Derek Carr, LV $0 8
5. (RB4) Saquon Barkley, NYG $56 10 85. (WR41) DeVonta Smith, PHI $4 14 165. (QB18) Daniel Jones, NYG $0 10 245. (QB26) Zach Wilson, NYJ $0 6
6. (RB5) Alvin Kamara, NO $53 6 86. (WR42) Deebo Samuel, SF $4 6 166. (QB19) Baker Mayfield, CLE $0 13 246. (TE23) Zach Ertz, PHI $0 14
7. (RB6) Ezekiel Elliott, DAL $51 7 87. (WR43) Tyler Boyd, CIN $3 10 167. (QB20) Kirk Cousins, MIN $0 7 247. (TE24) Jared Cook, LAC $0 7
8. (RB7) Nick Chubb, CLE $50 13 88. (WR44) Henry Ruggs III, LV $3 8 168. (TE21) Anthony Firkser, TEN $0 13 248. (TE25) Blake Jarwin, DAL $0 7
9. (WR1) Davante Adams, GB $48 13 89. (WR45) Jarvis Landry, CLE $3 13 169. (DST1) Buccaneers D/ST, TB $1 9 249. (TE26) O.J. Howard, TB $0 9
10. (WR2) Tyreek Hill, KC $46 12 90. (QB9) Tom Brady, TB $3 9 170. (DST2) Steelers D/ST, PIT $1 7 250. (RB80) Duke Johnson, FA $0 0
11. (RB8) Jonathan Taylor, IND $45 14 91. (RB29) James Robinson, JAC $3 7 171. (DST3) Ravens D/ST, BAL $1 8 251. (WR91) Chris Conley, HOU $0 10
12. (WR3) Stefon Diggs, BUF $45 7 92. (RB30) Raheem Mostert, SF $3 6 172. (DST4) Bills D/ST, BUF $1 7 252. (WR92) DeSean Jackson, LAR $0 11
13. (RB9) Aaron Jones, GB $44 13 93. (WR46) Antonio Brown, TB $3 9 173. (DST5) WFT D/ST, WAS $1 9 253. (DST15) Vikings D/ST, MIN $0 7
14. (RB10) Austin Ekeler, LAC $43 7 94. (WR47) Jaylen Waddle, MIA $3 14 174. (DST6) 49ers D/ST, SF $1 6 254. (DST16) Bears D/ST, CHI $0 10
15. (RB11) Antonio Gibson, WAS $42 9 95. (WR48) Jalen Reagor, PHI $3 14 175. (DST7) Broncos D/ST, DEN $1 11 255. (K15) Nick Folk, NE $0 14
16. (RB12) Najee Harris, PIT $40 7 96. (WR49) Corey Davis, NYJ $2 6 176. (DST8) Rams D/ST, LAR $1 11 256. (K16) Cody Parkey, CLE $0 13
17. (WR4) Calvin Ridley, ATL $38 6 97. (WR50) Cole Beasley, BUF $2 7 177. (DST9) Patriots D/ST, NE $1 14 257. (TE27) Gerald Everett, SEA $0 9
18. (RB13) Joe Mixon, CIN $37 10 98. (WR51) Marvin Jones Jr., JAC $2 7 178. (DST10) Browns D/ST, CLE $1 13 258. (TE28) Jordan Akins, HOU $0 10
19. (RB14) Clyde Edwards-Helaire, KC $36 12 99. (WR52) Mike Williams, LAC $2 7 179. (DST11) Colts D/ST, IND $0 14 259. (TE29) Chris Herndon, NYJ $0 6
20. (WR5) DK Metcalf, SEA $35 9 100. (RB31) Leonard Fournette, TB $2 9 180. (DST12) Saints D/ST, NO $0 6 260. (WR93) Quintez Cephus, DET $0 9
21. (WR6) DeAndre Hopkins, ARI $34 12 101. (RB32) Zack Moss, BUF $2 7 181. (K1) Harrison Butker, KC $1 12 261. (WR94) Dyami Brown, WAS $0 9
22. (RB15) David Montgomery, CHI $33 10 102. (RB33) David Johnson, HOU $2 10 182. (K2) Justin Tucker, BAL $1 8 262. (WR95) Adam Humphries, WAS $0 9
23. (RB16) Miles Sanders, PHI $32 14 103. (RB34) James Conner, ARI $2 12 183. (K3) Jason Myers, SEA $1 9 263. (WR96) Tim Patrick, DEN $0 11
24. (WR7) A.J. Brown, TEN $32 13 104. (QB10) Ryan Tannehill, TEN $2 13 184. (K4) Brandon McManus, DEN $1 11 264. (RB81) Carlos Hyde, JAC $0 7
25. (WR8) Justin Jefferson, MIN $31 7 105. (QB11) Matthew Stafford, LAR $2 11 185. (K5) Jason Sanders, MIA $1 14 265. (RB82) Jake Funk, LAR $0 11
26. (WR9) Terry McLaurin, WAS $30 9 106. (TE9) Noah Fant, DEN $2 11 186. (K6) Younghoe Koo, ATL $1 6 266. (QB27) Jared Goff, DET $0 9
27. (WR10) Mike Evans, TB $30 9 107. (TE10) Robert Tonyan, GB $2 13 187. (K7) Matt Gay, LAR $1 11 267. (QB28) Jameis Winston, NO $0 6
28. (RB17) D'Andre Swift, DET $29 9 108. (TE11) Mike Gesicki, MIA $2 14 188. (K8) Graham Gano, NYG $1 10 268. (QB29) Cam Newton, NE $0 14
29. (RB18) Chris Carson, SEA $28 9 109. (TE12) Jonnu Smith, NE $2 14 189. (K9) Greg Zuerlein, DAL $1 7 269. (QB30) Sam Darnold, CAR $0 13
30. (RB19) J.K. Dobbins, BAL $26 8 110. (RB35) Melvin Gordon, DEN $2 11 190. (K10) Tyler Bass, BUF $1 7 270. (QB31) Drew Lock, DEN $0 11
31. (WR11) CeeDee Lamb, DAL $26 7 111. (RB36) Ronald Jones II, TB $2 9 191. (K11) Josh Lambo, JAC $0 7 271. (WR97) Amari Rodgers, GB $0 13
32. (WR12) Keenan Allen, LAC $25 7 112. (RB37) Michael Carter, NYJ $2 6 192. (K12) Matt Prater, ARI $0 12 272. (WR98) Deonte Harris, NO $0 6
33. (WR13) Allen Robinson II, CHI $24 10 113. (RB38) Kenyan Drake, LV $2 8 193. (WR69) Tyrell Williams, DET $0 9 273. (WR99) Olamide Zaccheaus, ATL $0 6
34. (WR14) Robert Woods, LAR $23 11 114. (RB39) Jamaal Williams, DET $2 9 194. (WR70) Sterling Shepard, NYG $0 10 274. (WR100) Keelan Cole, NYJ $0 6
35. (WR15) Adam Thielen, MIN $22 7 115. (QB12) Jalen Hurts, PHI $2 14 195. (WR71) A.J. Green, ARI $0 12 275. (WR101) Anthony Miller, HOU $0 10
36. (TE2) Darren Waller, LV $22 8 116. (WR53) T.Y. Hilton, IND $2 14 196. (WR72) John Brown, LV $0 8 276. (RB83) Brian Hill, TEN $0 13
37. (TE3) George Kittle, SF $22 6 117. (WR54) Mecole Hardman, KC $2 12 197. (WR73) Gabriel Davis, BUF $0 7 277. (RB84) Kyle Juszczyk, SF $0 6
38. (RB20) Josh Jacobs, LV $21 8 118. (WR55) DeVante Parker, MIA $2 14 198. (WR74) Kadarius Toney, NYG $0 10 278. (RB85) Rex Burkhead, HOU $0 10
39. (RB21) Darrell Henderson Jr., LAR $21 11 119. (TE13) Irv Smith Jr., MIN $2 7 199. (RB60) Wayne Gallman, SF $0 6 279. (RB86) Ameer Abdullah, MIN $0 7
40. (WR16) Julio Jones, TEN $20 13 120. (TE14) Rob Gronkowski, TB $2 9 200. (RB61) Justin Jackson, LAC $0 7 280. (RB87) Trayveon Williams, CIN $0 10
41. (WR17) Amari Cooper, DAL $19 7 121. (TE15) Hunter Henry, NE $1 14 201. (RB62) Salvon Ahmed, MIA $0 14 281. (RB88) Ty Montgomery, NO $0 6
42. (WR18) DJ Moore, CAR $19 13 122. (TE16) Evan Engram, NYG $1 10 202. (RB63) Chuba Hubbard, CAR $0 13 282. (RB89) D'Ernest Johnson, CLE $0 13
43. (RB22) Myles Gaskin, MIA $18 14 123. (RB40) AJ Dillon, GB $1 13 203. (RB64) Malcolm Brown, MIA $0 14 283. (RB90) Eno Benjamin, ARI $0 12
44. (WR19) Chris Godwin, TB $17 9 124. (RB41) Trey Sermon, SF $1 6 204. (RB65) Marlon Mack, IND $0 14 284. (WR102) James Washington, PIT $0 7
45. (WR20) Kenny Golladay, NYG $17 10 125. (RB42) Devin Singletary, BUF $1 7 205. (RB66) Rhamondre Stevenson, NE $0 14 285. (DST17) Giants D/ST, NYG $0 10
46. (WR21) Tyler Lockett, SEA $15 9 126. (RB43) Gus Edwards, BAL $1 8 206. (RB67) Samaje Perine, CIN $0 10 286. (DST18) Cardinals D/ST, ARI $0 12
47. (WR22) Courtland Sutton, DEN $15 11 127. (RB44) Nyheim Hines, IND $1 14 207. (RB68) Xavier Jones, LAR $0 11 287. (K17) Ryan Succop, TB $0 9
48. (WR23) Brandon Aiyuk, SF $14 6 128. (QB13) Joe Burrow, CIN $1 10 208. (RB69) Javian Hawkins, ATL $0 6 288. (K18) Robbie Gould, SF $0 6
49. (WR24) Diontae Johnson, PIT $13 7 129. (QB14) Trevor Lawrence, JAC $1 7 209. (RB70) Joshua Kelley, LAC $0 7 289. (TE30) Jack Doyle, IND $0 14
50. (WR25) Odell Beckham Jr., CLE $13 13 130. (WR56) Darnell Mooney, CHI $1 10 210. (RB71) DeeJay Dallas, SEA $0 9 290. (TE31) Dawson Knox, BUF $0 7
51. (WR26) Ja'Marr Chase, CIN $12 10 131. (WR57) Elijah Moore, NYJ $1 6 211. (TE22) Cole Kmet, CHI $0 10 291. (TE32) C.J. Uzomah, CIN $0 10
52. (WR27) Cooper Kupp, LAR $11 11 132. (WR58) Jakobi Meyers, NE $1 14 212. (QB21) Ryan Fitzpatrick, WAS $0 9 292. (TE33) Hayden Hurst, ATL $0 6
53. (WR28) Tee Higgins, CIN $11 10 133. (WR59) Nelson Agholor, NE $1 14 213. (WR75) Terrace Marshall Jr., CAR $0 13 293. (TE34) Dan Arnold, CAR $0 13
54. (TE4) Mark Andrews, BAL $10 8 134. (WR60) Michael Pittman Jr., IND $1 14 214. (WR76) Emmanuel Sanders, BUF $0 7 294. (WR103) Keke Coutee, HOU $0 10
55. (QB1) Patrick Mahomes, KC $10 12 135. (WR61) Parris Campbell, IND $1 14 215. (WR77) Amon-Ra St. Brown, DET $0 9 295. (WR104) Sammy Watkins, BAL $0 8
56. (QB2) Josh Allen, BUF $10 7 136. (RB45) Alexander Mattison, MIN $1 7 216. (WR78) D'Wayne Eskridge, SEA $0 9 296. (QB32) Carson Wentz, IND $0 14
57. (WR29) Chase Claypool, PIT $10 7 137. (RB46) Latavius Murray, NO $1 6 217. (WR79) Nico Collins, HOU $0 10 297. (DST19) Jets D/ST, NYJ $0 6
58. (WR30) Michael Thomas, NO $9 6 138. (RB47) J.D. McKissic, WAS $1 9 218. (WR80) Denzel Mims, NYJ $0 6 298. (DST20) Chiefs D/ST, KC $0 12
59. (WR31) Will Fuller V, MIA $9 14 139. (RB48) James White, NE $1 14 219. (QB22) Justin Fields, CHI $0 10 299. (DST21) Titans D/ST, TEN $0 13
60. (WR32) JuJu Smith-Schuster, PIT $9 7 140. (RB49) Tony Pollard, DAL $1 7 220. (QB23) Deshaun Watson, HOU $0 10 300. (DST22) Falcons D/ST, ATL $0 6
61. (QB3) Kyler Murray, ARI $8 12 141. (RB50) Giovani Bernard, TB $0 9 221. (DST13) Packers D/ST, GB $0 13
62. (RB23) Chase Edmonds, ARI $8 12 142. (RB51) Phillip Lindsay, HOU $0 10 222. (DST14) Dolphins D/ST, MIA $0 14
63. (RB24) Javonte Williams, DEN $8 11 143. (TE17) Tyler Higbee, LAR $0 11 223. (K13) Daniel Carlson, LV $0 8
64. (RB25) Kareem Hunt, CLE $7 13 144. (TE18) Eric Ebron, PIT $0 7 224. (K14) Wil Lutz, NO $0 6
65. (WR33) DJ Chark Jr., JAC $7 7 145. (QB15) Tua Tagovailoa, MIA $0 14 225. (WR81) KJ Hamler, DEN $0 11
66. (WR34) Robby Anderson, CAR $7 13 146. (QB16) Matt Ryan, ATL $0 6 226. (WR82) Christian Kirk, ARI $0 12
67. (QB4) Dak Prescott, DAL $7 7 147. (QB17) Ben Roethlisberger, PIT $0 7 227. (WR83) Allen Lazard, GB $0 13
68. (QB5) Lamar Jackson, BAL $6 8 148. (RB52) Tarik Cohen, CHI $0 10 228. (WR84) Marquez Valdes-Scantling, GB $0 13
69. (WR35) Laviska Shenault Jr., JAC $6 7 149. (RB53) Tevin Coleman, NYJ $0 6 229. (WR85) Demarcus Robinson, KC $0 12
70. (WR36) Jerry Jeudy, DEN $6 11 150. (RB54) Darrel Williams, KC $0 12 230. (WR86) Byron Pringle, KC $0 12 8
71. (WR37) Brandin Cooks, HOU $6 10 151. (RB55) Darrynton Evans, TEN $0 13 231. (WR87) Darius Slayton, NYG $0 10
72. (WR38) Michael Gallup, DAL $6 7 152. (WR62) Jamison Crowder, NYJ $0 6 232. (WR88) Van Jefferson, LAR $0 11
73. (TE5) Kyle Pitts, ATL $6 6 153. (WR63) Russell Gage, ATL $0 6 233. (WR89) Tutu Atwell, LAR $0 11
74. (TE6) T.J. Hockenson, DET $5 9 154. (WR64) Tre'Quan Smith, NO $0 6 234. (WR90) Josh Palmer, LAC $0 7
75. (WR39) Marquise Brown, BAL $5 8 155. (WR65) Rashod Bateman, BAL $0 8 235. (RB72) Kerryon Johnson, PHI $0 14 11
76. (RB26) Travis Etienne, JAC $5 7 156. (WR66) Randall Cobb, GB $0 13 236. (RB73) Benny Snell Jr., PIT $0 7 12
77. (RB27) Mike Davis, ATL $5 6 157. (WR67) Rondale Moore, ARI $0 12 237. (RB74) Damien Williams, CHI $0 10
78. (RB28) Damien Harris, NE $4 14 158. (WR68) Breshad Perriman, DET $0 9 238. (RB75) Kenneth Gainwell, PHI $0 14
79. (QB6) Aaron Rodgers, GB $4 13 159. (RB56) Rashaad Penny, SEA $0 9 239. (RB76) La'Mical Perine, NYJ $0 6
80. (QB7) Russell Wilson, SEA $4 9 160. (RB57) Ty Johnson, NYJ $0 6 240. (RB77) Mark Ingram II, HOU $0 10`;

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
  const value = parseInt(details[1].replace("$", ""));
  return { name, posRank, pos, short, value };
});
// lines.forEach((line,i)=>{
//     console.log(line)
// })
