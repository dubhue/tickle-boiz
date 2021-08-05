import { numero } from "./nonPprByPos"

const rawTop300 = `1. (RB1) Christian McCaffrey, CAR $62 13 81. (TE7) Logan Thomas, WAS $4 9 161. (RB58) Devontae Booker, NYG $0 10 241. (RB78) Qadree Ollison, ATL $0 6
2. (RB2) Dalvin Cook, MIN $59 7 82. (TE8) Dallas Goedert, PHI $4 14 162. (RB59) Sony Michel, NE $0 14 242. (RB79) Cordarrelle Patterson, ATL $0 6
3. (RB3) Derrick Henry, TEN $59 13 83. (WR40) Marquise Brown, BAL $4 8 163. (TE19) Austin Hooper, CLE $0 13 243. (QB24) Trey Lance, SF $0 6
4. (TE1) Travis Kelce, KC $58 12 84. (WR41) Deebo Samuel, SF $4 6 164. (TE20) Adam Trautman, NO $0 6 244. (QB25) Derek Carr, LV $0 8
5. (RB4) Saquon Barkley, NYG $56 10 85. (WR42) DeVonta Smith, PHI $4 14 165. (QB18) Daniel Jones, NYG $0 10 245. (QB26) Carson Wentz, IND $0 14
6. (RB5) Alvin Kamara, NO $53 6 86. (WR43) Tyler Boyd, CIN $4 10 166. (QB19) Baker Mayfield, CLE $0 13 246. (TE23) Zach Ertz, PHI $0 14
7. (RB6) Jonathan Taylor, IND $51 14 87. (WR44) Henry Ruggs III, LV $3 8 167. (QB20) Kirk Cousins, MIN $0 7 247. (TE24) Anthony Firkser, TEN $0 13
8. (RB7) Ezekiel Elliott, DAL $50 7 88. (WR45) Jarvis Landry, CLE $3 13 168. (TE21) Jared Cook, LAC $0 7 248. (TE25) Blake Jarwin, DAL $0 7
9. (WR1) Davante Adams, GB $48 13 89. (QB8) Justin Herbert, LAC $3 7 169. (DST1) Buccaneers D/ST, TB $1 9 249. (TE26) O.J. Howard, TB $0 9
10. (WR2) Tyreek Hill, KC $46 12 90. (QB9) Tom Brady, TB $3 9 170. (DST2) Steelers D/ST, PIT $1 7 250. (RB80) Duke Johnson, FA $0 0
11. (RB8) Nick Chubb, CLE $45 13 91. (RB29) Raheem Mostert, SF $3 6 171. (DST3) Ravens D/ST, BAL $1 8 251. (WR91) Chris Conley, HOU $0 10
12. (WR3) Stefon Diggs, BUF $45 7 92. (RB30) James Robinson, JAC $3 7 172. (DST4) 49ers D/ST, SF $1 6 252. (WR92) DeSean Jackson, LAR $0 11
13. (RB9) Aaron Jones, GB $44 13 93. (WR46) Antonio Brown, TB $3 9 173. (DST5) WFT D/ST, WAS $1 9 253. (DST15) Vikings D/ST, MIN $0 7
14. (RB10) Antonio Gibson, WAS $43 9 94. (WR47) Jaylen Waddle, MIA $3 14 174. (DST6) Bills D/ST, BUF $1 7 254. (DST16) Bears D/ST, CHI $0 10
15. (RB11) Joe Mixon, CIN $42 10 95. (WR48) Jalen Reagor, PHI $3 14 175. (DST7) Broncos D/ST, DEN $1 11 255. (K15) Nick Folk, NE $0 14
16. (RB12) Najee Harris, PIT $40 7 96. (WR49) Corey Davis, NYJ $2 6 176. (DST8) Rams D/ST, LAR $1 11 256. (K16) Cody Parkey, CLE $0 13
17. (WR4) Calvin Ridley, ATL $38 6 97. (WR50) Marvin Jones Jr., JAC $2 7 177. (DST9) Patriots D/ST, NE $1 14 257. (TE27) Gerald Everett, SEA $0 9
18. (RB13) Austin Ekeler, LAC $37 7 98. (WR51) Mike Williams, LAC $2 7 178. (DST10) Browns D/ST, CLE $1 13 258. (TE28) Chris Herndon, NYJ $0 6
19. (RB14) Miles Sanders, PHI $36 14 99. (WR52) Cole Beasley, BUF $2 7 179. (DST11) Colts D/ST, IND $0 14 259. (TE29) Jordan Akins, HOU $0 10
20. (WR5) DK Metcalf, SEA $35 9 100. (RB31) Zack Moss, BUF $2 7 180. (DST12) Saints D/ST, NO $0 6 260. (WR93) Quintez Cephus, DET $0 9
21. (WR6) DeAndre Hopkins, ARI $34 12 101. (RB32) Leonard Fournette, TB $2 9 181. (K1) Harrison Butker, KC $1 12 261. (WR94) Dyami Brown, WAS $0 9
22. (RB15) Clyde Edwards-Helaire, KC $33 12 102. (RB33) Ronald Jones II, TB $2 9 182. (K2) Justin Tucker, BAL $1 8 262. (WR95) Adam Humphries, WAS $0 9
23. (RB16) David Montgomery, CHI $32 10 103. (RB34) David Johnson, HOU $2 10 183. (K3) Jason Myers, SEA $1 9 263. (WR96) Tim Patrick, DEN $0 11
24. (WR7) A.J. Brown, TEN $32 13 104. (QB10) Ryan Tannehill, TEN $2 13 184. (K4) Brandon McManus, DEN $1 11 264. (RB81) Carlos Hyde, JAC $0 7
25. (WR8) Justin Jefferson, MIN $31 7 105. (QB11) Joe Burrow, CIN $2 10 185. (K5) Jason Sanders, MIA $1 14 265. (RB82) Jake Funk, LAR $0 11
26. (WR9) Terry McLaurin, WAS $30 9 106. (TE9) Noah Fant, DEN $2 11 186. (K6) Younghoe Koo, ATL $1 6 266. (QB27) Zach Wilson, NYJ $0 6
27. (WR10) Mike Evans, TB $30 9 107. (TE10) Robert Tonyan, GB $2 13 187. (K7) Matt Gay, LAR $1 11 267. (QB28) Jared Goff, DET $0 9
28. (RB17) J.K. Dobbins, BAL $29 8 108. (TE11) Mike Gesicki, MIA $2 14 188. (K8) Graham Gano, NYG $1 10 268. (QB29) Jameis Winston, NO $0 6
29. (RB18) Chris Carson, SEA $28 9 109. (TE12) Jonnu Smith, NE $2 14 189. (K9) Greg Zuerlein, DAL $1 7 269. (QB30) Cam Newton, NE $0 14
30. (RB19) Josh Jacobs, LV $26 8 110. (RB35) James Conner, ARI $2 12 190. (K10) Tyler Bass, BUF $1 7 270. (QB31) Sam Darnold, CAR $0 13
31. (WR11) Amari Cooper, DAL $26 7 111. (RB36) Melvin Gordon, DEN $2 11 191. (K11) Josh Lambo, JAC $0 7 271. (WR97) Amari Rodgers, GB $0 13
32. (WR12) Allen Robinson II, CHI $25 10 112. (RB37) Michael Carter, NYJ $2 6 192. (K12) Matt Prater, ARI $0 12 272. (WR98) Deonte Harris, NO $0 6
33. (WR13) Keenan Allen, LAC $24 7 113. (RB38) Kenyan Drake, LV $2 8 193. (WR69) Tyrell Williams, DET $0 9 273. (WR99) Olamide Zaccheaus, ATL $0 6
34. (WR14) Adam Thielen, MIN $23 7 114. (RB39) Trey Sermon, SF $2 6 194. (WR70) Sterling Shepard, NYG $0 10 274. (WR100) Keelan Cole, NYJ $0 6
35. (WR15) Julio Jones, TEN $22 13 115. (QB12) Jalen Hurts, PHI $2 14 195. (WR71) A.J. Green, ARI $0 12 275. (WR101) Anthony Miller, HOU $0 10
36. (TE2) Darren Waller, LV $22 8 116. (WR53) T.Y. Hilton, IND $2 14 196. (WR72) John Brown, LV $0 8 276. (RB83) Brian Hill, TEN $0 13
37. (TE3) George Kittle, SF $22 6 117. (WR54) Mecole Hardman, KC $2 12 197. (WR73) Gabriel Davis, BUF $0 7 277. (RB84) Kyle Juszczyk, SF $0 6
38. (RB20) D'Andre Swift, DET $21 9 118. (WR55) Michael Pittman Jr., IND $2 14 198. (WR74) Kadarius Toney, NYG $0 10 278. (RB85) Rex Burkhead, HOU $0 10
39. (RB21) Darrell Henderson Jr., LAR $21 11 119. (TE13) Irv Smith Jr., MIN $2 7 199. (RB60) Wayne Gallman, SF $0 6 279. (RB86) Ameer Abdullah, MIN $0 7
40. (WR16) CeeDee Lamb, DAL $20 7 120. (TE14) Hunter Henry, NE $2 14 200. (RB61) Justin Jackson, LAC $0 7 280. (RB87) Jeremy McNichols, TEN $0 13
41. (WR17) Robert Woods, LAR $19 11 121. (TE15) Rob Gronkowski, TB $1 9 201. (RB62) Salvon Ahmed, MIA $0 14 281. (RB88) Trayveon Williams, CIN $0 10
42. (WR18) DJ Moore, CAR $19 13 122. (TE16) Eric Ebron, PIT $1 7 202. (RB63) Chuba Hubbard, CAR $0 13 282. (RB89) Ty Montgomery, NO $0 6
43. (RB22) Myles Gaskin, MIA $18 14 123. (RB40) AJ Dillon, GB $1 13 203. (RB64) Malcolm Brown, MIA $0 14 283. (RB90) D'Ernest Johnson, CLE $0 13
44. (WR19) Chris Godwin, TB $17 9 124. (RB41) Jamaal Williams, DET $1 9 204. (RB65) Marlon Mack, IND $0 14 284. (WR102) James Washington, PIT $0 7
45. (WR20) Kenny Golladay, NYG $17 10 125. (RB42) Devin Singletary, BUF $1 7 205. (RB66) Rhamondre Stevenson, NE $0 14 285. (DST17) Giants D/ST, NYG $0 10
46. (WR21) Tyler Lockett, SEA $15 9 126. (RB43) Nyheim Hines, IND $1 14 206. (RB67) Samaje Perine, CIN $0 10 286. (DST18) Cardinals D/ST, ARI $0 12
47. (WR22) Diontae Johnson, PIT $15 7 127. (RB44) Gus Edwards, BAL $1 8 207. (RB68) Xavier Jones, LAR $0 11 287. (K17) Ryan Succop, TB $0 9
48. (WR23) Courtland Sutton, DEN $14 11 128. (QB13) Matthew Stafford, LAR $1 11 208. (RB69) Javian Hawkins, ATL $0 6 288. (K18) Robbie Gould, SF $0 6
49. (WR24) Brandon Aiyuk, SF $13 6 129. (QB14) Trevor Lawrence, JAC $1 7 209. (RB70) Joshua Kelley, LAC $0 7 289. (TE30) Dawson Knox, BUF $0 7
50. (WR25) Cooper Kupp, LAR $13 11 130. (WR56) Parris Campbell, IND $1 14 210. (RB71) DeeJay Dallas, SEA $0 9 290. (TE31) Jack Doyle, IND $0 14
51. (WR26) Odell Beckham Jr., CLE $12 13 131. (WR57) DeVante Parker, MIA $1 14 211. (TE22) Cole Kmet, CHI $0 10 291. (TE32) C.J. Uzomah, CIN $0 10
52. (WR27) Ja'Marr Chase, CIN $11 10 132. (WR58) Darnell Mooney, CHI $1 10 212. (QB21) Ryan Fitzpatrick, WAS $0 9 292. (TE33) Hayden Hurst, ATL $0 6
53. (WR28) Tee Higgins, CIN $11 10 133. (WR59) Jakobi Meyers, NE $1 14 213. (WR75) Terrace Marshall Jr., CAR $0 13 293. (TE34) Dan Arnold, CAR $0 13
54. (TE4) Mark Andrews, BAL $10 8 134. (WR60) Nelson Agholor, NE $1 14 214. (WR76) Emmanuel Sanders, BUF $0 7 294. (WR103) Keke Coutee, HOU $0 10
55. (QB1) Patrick Mahomes, KC $10 12 135. (WR61) Elijah Moore, NYJ $1 6 215. (WR77) Amon-Ra St. Brown, DET $0 9 295. (WR104) Sammy Watkins, BAL $0 8
56. (QB2) Josh Allen, BUF $10 7 136. (RB45) Latavius Murray, NO $1 6 216. (WR78) D'Wayne Eskridge, SEA $0 9 296. (QB32) Drew Lock, DEN $0 11
57. (WR29) Chase Claypool, PIT $10 7 137. (RB46) Alexander Mattison, MIN $1 7 217. (WR79) Nico Collins, HOU $0 10 297. (DST19) Jets D/ST, NYJ $0 6
58. (WR30) Michael Thomas, NO $9 6 138. (RB47) J.D. McKissic, WAS $1 9 218. (WR80) Denzel Mims, NYJ $0 6 298. (DST20) Chiefs D/ST, KC $0 12
59. (WR31) JuJu Smith-Schuster, PIT $9 7 139. (RB48) James White, NE $1 14 219. (QB22) Justin Fields, CHI $0 10 299. (DST21) Titans D/ST, TEN $0 13
60. (WR32) Will Fuller V, MIA $9 14 140. (RB49) Tarik Cohen, CHI $1 10 220. (QB23) Deshaun Watson, HOU $0 10 300. (DST22) Falcons D/ST, ATL $0 6
61. (QB3) Kyler Murray, ARI $8 12 141. (RB50) Tony Pollard, DAL $0 7 221. (DST13) Packers D/ST, GB $0 13
62. (QB4) Dak Prescott, DAL $8 7 142. (RB51) Giovani Bernard, TB $0 9 222. (DST14) Dolphins D/ST, MIA $0 14
63. (RB23) Chase Edmonds, ARI $8 12 143. (TE17) Evan Engram, NYG $0 10 223. (K13) Daniel Carlson, LV $0 8
64. (RB24) Javonte Williams, DEN $7 11 144. (TE18) Tyler Higbee, LAR $0 11 224. (K14) Wil Lutz, NO $0 6
65. (RB25) Travis Etienne, JAC $7 7 145. (QB15) Tua Tagovailoa, MIA $0 14 225. (WR81) KJ Hamler, DEN $0 11
66. (WR33) Laviska Shenault Jr., JAC $7 7 146. (QB16) Matt Ryan, ATL $0 6 226. (WR82) Christian Kirk, ARI $0 12
67. (WR34) DJ Chark Jr., JAC $7 7 147. (QB17) Ben Roethlisberger, PIT $0 7 227. (WR83) Allen Lazard, GB $0 13
68. (WR35) Robby Anderson, CAR $6 13 148. (RB52) Tevin Coleman, NYJ $0 6 228. (WR84) Marquez Valdes-Scantling, GB $0 13
69. (WR36) Jerry Jeudy, DEN $6 11 149. (RB53) Phillip Lindsay, HOU $0 10 229. (WR85) Demarcus Robinson, KC $0 12
70. (WR37) Brandin Cooks, HOU $6 10 150. (RB54) Darrel Williams, KC $0 12 230. (WR86) Byron Pringle, KC $0 12 8
71. (WR38) Michael Gallup, DAL $6 7 151. (RB55) Darrynton Evans, TEN $0 13 231. (WR87) Darius Slayton, NYG $0 10
72. (TE5) Kyle Pitts, ATL $6 6 152. (WR62) Russell Gage, ATL $0 6 232. (WR88) Van Jefferson, LAR $0 11
73. (TE6) T.J. Hockenson, DET $6 9 153. (WR63) Tre'Quan Smith, NO $0 6 233. (WR89) Tutu Atwell, LAR $0 11
74. (WR39) Curtis Samuel, WAS $5 9 154. (WR64) Rashod Bateman, BAL $0 8 234. (WR90) Josh Palmer, LAC $0 7
75. (RB26) Kareem Hunt, CLE $5 13 155. (WR65) Randall Cobb, GB $0 13 235. (RB72) Kerryon Johnson, PHI $0 14 11
76. (RB27) Damien Harris, NE $5 14 156. (WR66) Rondale Moore, ARI $0 12 236. (RB73) Benny Snell Jr., PIT $0 7 12
77. (RB28) Mike Davis, ATL $5 6 157. (WR67) Jamison Crowder, NYJ $0 6 237. (RB74) Damien Williams, CHI $0 10
78. (QB5) Lamar Jackson, BAL $4 8 158. (WR68) Breshad Perriman, DET $0 9 238. (RB75) Kenneth Gainwell, PHI $0 14
79. (QB6) Aaron Rodgers, GB $4 13 159. (RB56) Rashaad Penny, SEA $0 9 239. (RB76) La'Mical Perine, NYJ $0 6
80. (QB7) Russell Wilson, SEA $4 9 160. (RB57) Ty Johnson, NYJ $0 6 240. (RB77) Mark Ingram II, HOU $0 10`

const _top300 = rawTop300.replace(/\n/g,"").split(numero)
export const parens = /\(([^()]+)\)/g

export const top300 = _top300.slice(1,_top300.length).map(str=>{
    const _posRank =  str.match(parens)
    const posRank = Array.isArray(_posRank) ? parseInt(_posRank[0].replace(/\D/g,"")) : 999
    const pos = Array.isArray(_posRank) ? _posRank[0].replace(/[^a-z]/gi,'') : 'SCRUB'
    const split = str.replace(parens,'').split(',')
    const name = split[0].trim()
    const details = split[1].trim().split(" ")
    const short = details[0]
    const value = parseInt(details[1].replace('$',""))
    return {name, posRank, pos,short, value}
})
// lines.forEach((line,i)=>{
//     console.log(line)
// })
