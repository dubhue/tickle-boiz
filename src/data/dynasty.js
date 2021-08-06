import { numero } from "./nonPprByPos";
import { parens } from "./top300";

const rawDynasty = `1. (RB1) Christian McCaffrey, CAR 2017-1 25-3 81. (RB25) Myles Gaskin, MIA 2019-7 24-6 161. (WR74) Allen Lazard, GB 2018-U 25-8 1. (WR1) Ja'Marr Chase, CIN 2021-1 21-6
2. (RB2) Saquon Barkley, NYG 2018-1 24-7 82. (RB26) Zack Moss, BUF 2020-3 23-8 162. (WR75) Marvin Jones Jr., JAC 2012-5 31-5 2. (RB1) Najee Harris, PIT 2021-1 23-6
3. (RB3) Jonathan Taylor, IND 2020-2 22-7 83. (QB8) Deshaun Watson, HOU 2017-1 25-11 163. (QB21) Matthew Stafford, LAR 2009-1 33-7 3. (TE1) Kyle Pitts, ATL 2021-1 20-11
4. (RB4) Dalvin Cook, MIN 2017-2 26-0 84. (QB9) Joe Burrow, CIN 2020-1 24-8 164. (WR76) T.Y. Hilton, IND 2012-3 31-9 4. (WR2) DeVonta Smith, PHI 2021-1 22-9
5. (WR1) Tyreek Hill, KC 2016-5 27-6 85. (RB27) Damien Harris, NE 2019-3 24-6 165. (QB22) Mac Jones, NE 2021-1 23-0 5. (WR3) Jaylen Waddle, MIA 2021-1 22-9
6. (WR2) Justin Jefferson, MIN 2020-1 22-2 86. (TE8) Dallas Goedert, PHI 2018-2 26-8 166. (WR77) DeVante Parker, MIA 2015-1 28-7 6. (RB2) Travis Etienne, JAC 2021-1 22-7
7. (WR3) DK Metcalf, SEA 2019-2 23-8 87. (RB28) Kareem Hunt, CLE 2017-3 26-1 167. (WR78) Christian Kirk, ARI 2018-2 24-9 7. (RB3) Javonte Williams, DEN 2021-2 21-4
8. (RB5) Alvin Kamara, NO 2017-3 26-1 88. (QB10) Russell Wilson, SEA 2012-3 32-9 168. (WR79) Quintez Cephus, DET 2020-5 23-5 8. (WR4) Rondale Moore, ARI 2021-2 21-3
9. (WR4) A.J. Brown, TEN 2019-2 24-2 89. (WR43) Marquise Brown, BAL 2019-1 24-3 169. (TE19) Eric Ebron, PIT 2014-1 28-4 9. (WR5) Elijah Moore, NYJ 2021-2 21-5
10. (WR5) Davante Adams, GB 2014-2 28-8 90. (WR44) Curtis Samuel, WAS 2017-2 25-0 170. (QB23) Matt Ryan, ATL 2008-1 36-3 10. (WR6) Terrace Marshall Jr., CAR 2021-2 21-3
11. (RB6) Antonio Gibson, WAS 2020-3 23-2 91. (WR45) Michael Gallup, DAL 2018-3 25-6 171. (RB50) Chuba Hubbard, CAR 2021-4 22-2 11. (WR7) Rashod Bateman, BAL 2021-1 21-9
12. (WR6) Stefon Diggs, BUF 2015-5 27-9 92. (QB11) Aaron Rodgers, GB 2005-1 37-9 172. (RB51) Tarik Cohen, CHI 2017-4 26-1 12. (WR8) Kadarius Toney, NYG 2021-1 22-7
13. (WR7) Calvin Ridley, ATL 2018-1 26-8 93. (WR46) Deebo Samuel, SF 2019-2 25-7 173. (WR80) Bryan Edwards, LV 2020-3 22-9 13. (QB1) Trevor Lawrence, JAC 2021-1 21-11
14. (RB7) Clyde Edwards-Helaire, KC 2020-1 22-4 94. (QB12) Tua Tagovailoa, MIA 2020-1 23-6 174. (TE20) Tyler Higbee, LAR 2016-4 28-8 14. (RB4) Trey Sermon, SF 2021-3 22-7
15. (RB8) Najee Harris, PIT 2021-1 23-6 95. (WR47) Odell Beckham Jr., CLE 2014-1 28-10 175. (RB52) Salvon Ahmed, MIA 2020-U 22-8 15. (RB5) Michael Carter, NYJ 2021-4 22-4
16. (WR8) CeeDee Lamb, DAL 2020-1 22-5 96. (RB29) Chase Edmonds, ARI 2018-4 25-4 176. (WR81) Nelson Agholor, NE 2015-1 28-3 16. (QB2) Justin Fields, CHI 2021-1 22-6
17. (WR9) Ja'Marr Chase, CIN 2021-1 21-6 97. (RB30) AJ Dillon, GB 2020-2 23-4 177. (RB53) Ty Johnson, NYJ 2019-6 23-11 17. (QB3) Zach Wilson, NYJ 2021-1 22-1
18. (RB9) D'Andre Swift, DET 2020-2 22-7 98. (WR48) Will Fuller V, MIA 2016-1 27-4 178. (WR82) Darius Slayton, NYG 2019-5 24-7 18. (QB4) Trey Lance, SF 2021-1 21-4
19. (RB10) Nick Chubb, CLE 2018-2 25-8 99. (WR49) Tyler Boyd, CIN 2016-2 26-9 179. (QB24) Jared Goff, DET 2016-1 26-10 19. (WR9) Tutu Atwell, LAR 2021-2 21-11
20. (RB11) Ezekiel Elliott, DAL 2016-1 26-1 100. (WR50) Michael Pittman Jr., IND 2020-2 23-11 180. (WR83) Breshad Perriman, DET 2015-1 27-11 20. (WR10) D'Wayne Eskridge, SEA 2021-2 24-5
21. (RB12) J.K. Dobbins, BAL 2020-2 22-8 101. (WR51) Brandin Cooks, HOU 2014-1 27-11 181. (RB54) J.D. McKissic, WAS 2016-U 27-10 21. (WR11) Josh Palmer, LAC 2021-3 21-11
22. (WR10) DeAndre Hopkins, ARI 2013-1 29-3 102. (WR52) Robby Anderson, CAR 2016-U 28-4 182. (RB55) Gus Edwards, BAL 2018-U 26-4 22. (WR12) Nico Collins, HOU 2021-3 22-5
23. (RB13) Derrick Henry, TEN 2016-2 27-8 103. (WR53) Darnell Mooney, CHI 2020-5 23-10 183. (QB25) Carson Wentz, IND 2016-1 28-8 23. (WR13) Amari Rodgers, GB 2021-3 21-11
24. (RB14) Austin Ekeler, LAC 2017-U 26-3 104. (TE9) Mike Gesicki, MIA 2018-2 25-11 184. (WR84) Jamison Crowder, NYJ 2015-4 28-2 24. (WR14) Dyami Brown, WAS 2021-3 21-10
25. (RB15) Aaron Jones, GB 2017-5 26-9 105. (RB31) Darrell Henderson, LAR 2019-3 24-0 185. (WR85) Sterling Shepard, NYG 2016-2 27-6 25. (WR15) Amon-Ra St. Brown, DET 2021-4 21-10
26. (WR11) Terry McLaurin, WAS 2019-3 25-4 106. (RB32) Trey Sermon, SF 2021-3 22-7 186. (RB56) James White, NE 2014-4 29-7 26. (WR16) Anthony Schwartz, CLE 2021-3 21-0
27. (WR12) DJ Moore, CAR 2018-1 24-4 107. (QB13) Justin Fields, CHI 2021-1 22-6 187. (TE21) Pat Freiermuth, PIT 2021-2 22-10 27. (RB6) Rhamondre Stevenson, NE 2021-4 23-6
28. (RB16) Joe Mixon, CIN 2017-2 25-1 108. (WR54) Mecole Hardman, KC 2019-2 24-5 188. (WR86) Tre'Quan Smith, NO 2018-3 25-8 28. (RB7) Kenneth Gainwell, PHI 2021-5 22-5
29. (WR13) Amari Cooper, DAL 2015-1 27-2 109. (WR55) Parris Campbell, IND 2019-2 24-1 189. (QB26) Ben Roethlisberger, PIT 2004-1 39-6 29. (RB8) Chuba Hubbard, CAR 2021-4 22-2
30. (WR14) Allen Robinson, CHI 2014-2 28-0 110. (QB14) Zach Wilson, NYJ 2021-1 22-1 190. (RB57) DeeJay Dallas, SEA 2020-4 22-11 30. (QB5) Mac Jones, NE 2021-1 23-0
31. (WR15) Brandon Aiyuk, SF 2020-1 23-5 111. (TE10) Irv Smith Jr., MIN 2019-2 23-1 191. (WR87) Tyrell Williams, DET 2015-U 29-6 31. (TE2) Pat Freiermuth, PIT 2021-2 22-10
32. (QB1) Patrick Mahomes, KC 2017-1 25-11 112. (RB33) Michael Carter, NYJ 2021-4 22-4 192. (WR88) A.J. Green, ARI 2011-1 33-1 32. (WR17) Tylan Wallace, BAL 2021-4 22-3
33. (WR16) Tee Higgins, CIN 2020-2 22-7 113. (WR56) Jakobi Meyers, NE 2019-U 24-10 193. (QB27) Kirk Cousins, MIN 2012-4 33-0 33. (WR18) Dez Fitzpatrick, TEN 2021-4 23-8
34. (TE1) Travis Kelce, KC 2013-3 31-11 114. (RB34) Ronald Jones, TB 2018-2 24-1 194. (WR89) Van Jefferson, LAR 2020-2 25-1 34. (WR19) Cornell Powell, KC 2021-5 23-10
35. (RB17) Travis Etienne, JAC 2021-1 22-7 115. (RB35) Mike Davis, ATL 2015-4 28-6 195. (TE22) Anthony Firkser, TEN 2018-U 26-6 35. (WR20) Jaelon Darden, TB 2021-4 22-7
36. (TE2) Kyle Pitts, ATL 2021-1 20-11 116. (QB15) Trey Lance, SF 2021-1 21-4 196. (RB58) Latavius Murray, NO 2013-6 31-7 36. (TE3) Hunter Long, MIA 2021-3 23-0
37. (TE3) George Kittle, SF 2017-5 27-11 117. (WR57) Gabriel Davis, BUF 2020-4 22-5 197. (TE23) Chris Herndon, NYJ 2018-4 25-6 37. (TE5) Tre' McKitty, LAC 2021-3 22-7
38. (WR17) Michael A. Thomas, NO 2016-2 28-6 118. (WR58) Corey Davis, NYJ 2017-1 26-7 198. (RB59) Rashaad Penny, SEA 2018-1 25-7 38. (RB9) Elijah Mitchell, SF 2021-6 23-4
39. (WR18) Diontae Johnson, PIT 2019-3 24-10 119. (WR59) Jarvis Landry, CLE 2014-2 28-9 199. (WR90) John Brown, LV 2014-3 31-5 39. (RB10) Chris Evans, CIN 2021-6 23-11
40. (WR19) Chris Godwin, TB 2017-3 25-6 120. (TE11) Logan Thomas, WAS 2014-4 30-2 200. (QB28) Sam Darnold, CAR 2018-1 24-3 40. (RB11) Khalil Herbert, CHI 2021-6 23-4
41. (WR20) Mike Evans, TB 2014-1 28-0 121. (RB36) Leonard Fournette, TB 2017-1 26-7 201. (WR91) Deonte Harris, NO 2019-U 23-9 41. (RB12) Demetric Felton, CLE 2021-6 23-1
42. (WR21) Keenan Allen, LAC 2013-3 29-4 122. (RB37) Nyheim Hines, IND 2018-4 24-9 202. (RB60) Darrel Williams, KC 2018-U 26-4 42. (WR21) Ihmir Smith-Marsette, MIN 2021-5 22-0
43. (WR22) DeVonta Smith, PHI 2021-1 22-9 123. (RB38) Devin Singletary, BUF 2019-3 24-0 203. (WR92) Olamide Zaccheaus, ATL 2019-U 24-1 43. (WR22) Simi Fehoko, DAL 2021-5 23-10
44. (WR23) Jaylen Waddle, MIA 2021-1 22-9 124. (RB39) Raheem Mostert, SF 2015-U 29-5 204. (WR93) Marquez Callaway, NO 2020-U 23-5 44. (TE4) Brevin Jordan, HOU 2021-5 21-1
45. (RB18) Josh Jacobs, LV 2019-1 23-6 125. (TE12) Robert Tonyan, GB 2017-U 27-4 205. (RB61) Giovani Bernard, TB 2013-2 29-9 45. (TE6) Kylen Granson, IND 2021-4 23-5
46. (RB19) Miles Sanders, PHI 2019-2 24-4 126. (WR60) Mike Williams, LAC 2017-1 26-11 206. (WR94) Marquez Valdes-Scantling, GB 2018-5 26-10 46. (TE7) Jacob Harris, LAR 2021-4 24-4
47. (RB20) Javonte Williams, DEN 2021-2 21-4 127. (RB40) James Conner, ARI 2017-3 26-4 207. (RB62) Benny Snell Jr., PIT 2019-4 23-6 47. (TE8) Noah Gray, KC 2021-5 22-4
48. (RB21) David Montgomery, CHI 2019-3 24-3 128. (TE13) Jonnu Smith, NE 2017-3 26-0 208. (RB63) Tevin Coleman, NYJ 2015-3 28-4 48. (QB6) Kyle Trask, TB 2021-2 23-6
49. (TE4) Darren Waller, LV 2015-6 28-11 129. (WR61) Tutu Atwell, LAR 2021-2 21-11 209. (TE24) O.J. Howard, TB 2017-1 26-9 49. (QB7) Davis Mills, HOU 2021-3 22-10
50. (WR24) Jerry Jeudy, DEN 2020-1 22-4 130. (QB16) Jalen Hurts, PHI 2020-2 23-1 210. (WR95) Emmanuel Sanders, BUF 2010-3 34-5 50. (QB8) Kellen Mond, MIN 2021-3 22-1
51. (WR25) Laviska Shenault Jr., JAC 2020-2 22-11 131. (TE14) Hunter Henry, NE 2016-2 26-9 211. (RB64) Phillip Lindsay, HOU 2018-U 27-1 51. (TE9) John Bates, WAS 2021-4 23-10
52. (RB22) Cam Akers, LAR 2020-2 22-2 132. (QB17) Ryan Tannehill, TEN 2012-1 33-1 212. (RB65) Joshua Kelley, LAC 2020-4 23-9 52. (WR23) Seth Williams, DEN 2021-6 22-4
53. (WR26) Chase Claypool, PIT 2020-2 23-2 133. (WR62) D'Wayne Eskridge, SEA 2021-2 24-5 213. (WR96) Demarcus Robinson, KC 2016-4 26-11 53. (WR24) Dazz Newsome, CHI 2021-6 22-3
54. (WR27) JuJu Smith-Schuster, PIT 2017-2 24-9 134. (RB41) Alexander Mattison, MIN 2019-3 23-2 214. (RB66) La'Mical Perine, NYJ 2020-4 23-7 54. (WR25) Marquez Stevenson, BUF 2021-6 23-5
55. (QB2) Josh Allen, BUF 2018-1 25-3 135. (RB42) David Johnson, HOU 2015-3 29-8 215. (WR97) Jalen Guyton, LAC 2019-U 24-3 55. (WR26) Shi Smith, CAR 2021-6 22-10
56. (QB3) Kyler Murray, ARI 2019-1 24-1 136. (WR63) Josh Palmer, LAC 2021-3 21-11 216. (WR98) Tylan Wallace, BAL 2021-4 22-3 56. (WR27) Frank Darby, ATL 2021-6 24-0
57. (WR28) Courtland Sutton, DEN 2018-2 25-10 137. (RB43) Kenyan Drake, LV 2016-3 27-7 217. (TE25) Blake Jarwin, DAL 2017-U 27-1 57. (WR28) Racey Mcmath, TEN 2021-6 22-2
58. (WR29) Robert Woods, LAR 2013-2 29-4 138. (RB44) Melvin Gordon, DEN 2015-1 28-4 218. (WR99) Dez Fitzpatrick, TEN 2021-4 23-8 58. (RB13) Larry Rountree III, LAC 2021-6 23-6
59. (QB4) Lamar Jackson, BAL 2018-1 24-8 139. (QB18) Daniel Jones, NYG 2019-1 24-3 219. (TE26) Rob Gronkowski, TB 2010-2 32-3 59. (RB14) Gary Brightwell, NYG 2021-6 22-6
60. (WR30) Kenny Golladay, NYG 2017-3 27-10 140. (QB19) Baker Mayfield, CLE 2018-1 26-4 220. (TE27) Gerald Everett, SEA 2017-2 27-2 60. (RB15) Javian Hawkins, ATL 2021-U 21-10
61. (TE5) T.J. Hockenson, DET 2019-1 24-2 141. (TE15) Adam Trautman, NO 2020-3 24-7 221. (QB29) Derek Carr, LV 2014-2 30-5
62. (TE6) Mark Andrews, BAL 2018-3 26-0 142. (WR64) Nico Collins, HOU 2021-3 22-5 222. (TE28) Zach Ertz, PHI 2013-2 30-9
63. (RB23) Chris Carson, SEA 2017-7 26-11 143. (WR65) Amari Rodgers, GB 2021-3 21-11 223. (RB67) Sony Michel, NE 2018-1 26-6
64. (QB5) Dak Prescott, DAL 2016-4 28-1 144. (TE16) Cole Kmet, CHI 2020-2 22-5 224. (WR100) Cornell Powell, KC 2021-5 23-10
65. (QB6) Justin Herbert, LAC 2020-1 23-5 145. (WR66) Dyami Brown, WAS 2021-3 21-10 225. (WR101) Jaelon Darden, TB 2021-4 22-7
66. (WR31) DJ Chark, JAC 2018-2 24-11 146. (WR67) Amon-Ra St. Brown, DET 2021-4 21-10 226. (WR102) Donovan Peoples-Jones, CLE 2020-6 22-6
67. (WR32) Adam Thielen, MIN 2014-U 31-0 147. (RB45) Tony Pollard, DAL 2019-4 24-4 227. (TE29) Hunter Long, MIA 2021-3 23-0
68. (TE7) Noah Fant, DEN 2019-1 23-9 148. (RB46) Jamaal Williams, DET 2017-4 26-5 228. (RB68) Wayne Gallman, SF 2017-4 26-11
69. (RB24) James Robinson, JAC 2020-U 23-1 149. (RB47) Darrynton Evans, TEN 2020-3 23-2 229. (RB69) Kerryon Johnson, PHI 2018-2 24-2
70. (WR33) Tyler Lockett, SEA 2015-3 28-11 150. (WR68) Anthony Schwartz, CLE 2021-3 21-0 230. (WR103) Devin Duvernay, BAL 2020-3 23-11 8
71. (WR34) Cooper Kupp, LAR 2017-3 28-2 151. (WR69) KJ Hamler, DEN 2020-2 22-2 231. (WR104) Lynn Bowden Jr., MIA 2020-3 23-10
72. (WR35) Julio Jones, TEN 2011-1 32-7 152. (WR70) Antonio Brown, TB 2010-6 33-1 232. (QB30) Ryan Fitzpatrick, WAS 2005-7 38-9
73. (WR36) Henry Ruggs III, LV 2020-1 22-7 153. (TE17) Evan Engram, NYG 2017-1 27-0 233. (WR105) Byron Pringle, KC 2018-U 27-9
74. (WR37) Jalen Reagor, PHI 2020-1 22-8 154. (WR71) Russell Gage, ATL 2018-6 25-7 234. (RB70) Marlon Mack, IND 2017-4 25-6
75. (WR38) Rondale Moore, ARI 2021-2 21-3 155. (WR72) Denzel Mims, NYJ 2020-2 23-10 235. (TE30) Dawson Knox, BUF 2019-3 24-9 11
76. (WR39) Elijah Moore, NYJ 2021-2 21-5 156. (RB48) Rhamondre Stevenson, NE 2021-4 23-6 236. (TE31) Donald Parham, LAC 2019-U 24-0 12
77. (WR40) Terrace Marshall Jr., CAR 2021-2 21-3 157. (WR73) Cole Beasley, BUF 2012-U 32-4 237. (RB71) Elijah Mitchell, SF 2021-6 23-4
78. (WR41) Rashod Bateman, BAL 2021-1 21-9 158. (QB20) Tom Brady, TB 2000-6 44-1 238. (TE32) Dalton Schultz, DAL 2018-4 25-1
79. (WR42) Kadarius Toney, NYG 2021-1 22-7 159. (RB49) Kenneth Gainwell, PHI 2021-5 22-5 239. (QB31) Drew Lock, DEN 2019-2 24-9
80. (QB7) Trevor Lawrence, JAC 2021-1 21-11 160. (TE18) Austin Hooper, CLE 2016-3 26-10 240. (TE33) Dan Arnold, CAR 2017-U 26-5`;

const _dynasty = rawDynasty.split(numero);

export const dynasty = _dynasty.slice(1, _dynasty.length).map((str) => {
  const _posRank = str.match(parens);
  //const posRank = Array.isArray(_posRank) ? parseInt(_posRank[0].replace(/\D/g,"")) : 999
  const pos = Array.isArray(_posRank)
    ? _posRank[0].replace(/[^a-z]/gi, "")
    : "SCRUB";
  const split = str.replace(parens, "").split(",");
  const name = split[0].trim();
  //console.log(split[1])
  const details = split[1].trim().split(" ");
  const short = details[0];
  const exp = details[1].split("-");
  const age = details[2].split("-");
  const draftRound = exp[1] === "U" ? 8 : parseInt(exp[1]);
  return {
    pos,
    name,
    short,
    id: name + pos + short,
    draftYear: parseInt(exp[0]),
    draftRound,
    age: parseInt(age[0]) + parseInt(age[1]) / 12
  };
});
