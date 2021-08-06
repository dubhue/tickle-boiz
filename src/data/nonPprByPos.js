const rawNonPpr = `1. (55) Patrick Mahomes, KC $10 12 1. (1) Christian McCaffrey, CAR $62 13 78. (241) Qadree Ollison, ATL $0 6 68. (158) Breshad Perriman, DET $0 9
2. (56) Josh Allen, BUF $10 7 2. (2) Dalvin Cook, MIN $59 7 79. (242) Cordarrelle Patterson, ATL $0 6 69. (193) Tyrell Williams, DET $0 9
3. (61) Kyler Murray, ARI $8 12 3. (3) Derrick Henry, TEN $59 13 80. (250) Duke Johnson, FA $0 0 70. (194) Sterling Shepard, NYG $0 10
4. (62) Dak Prescott, DAL $8 7 4. (5) Saquon Barkley, NYG $56 10 81. (264) Carlos Hyde, JAC $0 7 71. (195) A.J. Green, ARI $0 12
5. (78) Lamar Jackson, BAL $4 8 5. (6) Alvin Kamara, NO $53 6 82. (265) Jake Funk, LAR $0 11 72. (196) John Brown, LV $0 8
6. (79) Aaron Rodgers, GB $4 13 6. (7) Jonathan Taylor, IND $51 14 83. (276) Brian Hill, TEN $0 13 73. (197) Gabriel Davis, BUF $0 7
7. (80) Russell Wilson, SEA $4 9 7. (8) Ezekiel Elliott, DAL $50 7 84. (277) Kyle Juszczyk, SF $0 6 74. (198) Kadarius Toney, NYG $0 10
8. (89) Justin Herbert, LAC $3 7 8. (11) Nick Chubb, CLE $45 13 85. (278) Rex Burkhead, HOU $0 10 75. (213) Terrace Marshall Jr., CAR $0 13
9. (90) Tom Brady, TB $3 9 9. (13) Aaron Jones, GB $44 13 76. (214) Emmanuel Sanders, BUF $0 7
10. (104) Ryan Tannehill, TEN $2 13 10. (14) Antonio Gibson, WAS $43 9 77. (215) Amon-Ra St. Brown, DET $0 9
11. (105) Joe Burrow, CIN $2 10 11. (15) Joe Mixon, CIN $42 10 1. (9) Davante Adams, GB $48 13 78. (216) D'Wayne Eskridge, SEA $0 9
12. (115) Jalen Hurts, PHI $2 14 12. (16) Najee Harris, PIT $40 7 2. (10) Tyreek Hill, KC $46 12 79. (217) Nico Collins, HOU $0 10
13. (128) Matthew Stafford, LAR $1 11 13. (18) Austin Ekeler, LAC $37 7 3. (12) Stefon Diggs, BUF $45 7 80. (218) Denzel Mims, NYJ $0 6
14. (129) Trevor Lawrence, JAC $1 7 14. (19) Miles Sanders, PHI $36 14 4. (17) Calvin Ridley, ATL $38 6 81. (225) KJ Hamler, DEN $0 11
15. (145) Tua Tagovailoa, MIA $0 14 15. (22) Clyde Edwards-Helaire, KC $33 12 5. (20) DK Metcalf, SEA $35 9 82. (226) Christian Kirk, ARI $0 12
16. (146) Matt Ryan, ATL $0 6 16. (23) David Montgomery, CHI $32 10 6. (21) DeAndre Hopkins, ARI $34 12 83. (227) Allen Lazard, GB $0 13
17. (147) Ben Roethlisberger, PIT $0 7 17. (28) J.K. Dobbins, BAL $29 8 7. (24) A.J. Brown, TEN $32 13 84. (228) Marquez Valdes-Scantling, GB $0 13
18. (165) Daniel Jones, NYG $0 10 18. (29) Chris Carson, SEA $28 9 8. (25) Justin Jefferson, MIN $31 7 85. (229) Demarcus Robinson, KC $0 12
19. (166) Baker Mayfield, CLE $0 13 19. (30) Josh Jacobs, LV $26 8 9. (26) Terry McLaurin, WAS $30 9 86. (230) Byron Pringle, KC $0 12
20. (167) Kirk Cousins, MIN $0 7 20. (38) D'Andre Swift, DET $21 9 10. (27) Mike Evans, TB $30 9 87. (231) Darius Slayton, NYG $0 10
21. (212) Ryan Fitzpatrick, WAS $0 9 21. (39) Darrell Henderson Jr., LAR $21 11 11. (31) Amari Cooper, DAL $26 7 88. (232) Van Jefferson, LAR $0 11
22. (219) Justin Fields, CHI $0 10 22. (43) Myles Gaskin, MIA $18 14 12. (32) Allen Robinson II, CHI $25 10 89. (233) Tutu Atwell, LAR $0 11
23. (220) Deshaun Watson, HOU $0 10 23. (63) Chase Edmonds, ARI $8 12 13. (33) Keenan Allen, LAC $24 7 90. (234) Josh Palmer, LAC $0 7
24. (243) Trey Lance, SF $0 6 24. (64) Javonte Williams, DEN $7 11 14. (34) Adam Thielen, MIN $23 7
25. (244) Derek Carr, LV $0 8 25. (65) Travis Etienne, JAC $7 7 15. (35) Julio Jones, TEN $22 13
26. (245) Carson Wentz, IND $0 14 26. (75) Kareem Hunt, CLE $5 13 16. (40) CeeDee Lamb, DAL $20 7 1. (169) Buccaneers D/ST (Wk 1: DAL) $1 9
27. (266) Zach Wilson, NYJ $0 6 27. (76) Damien Harris, NE $5 14 17. (41) Robert Woods, LAR $19 11 2. (170) Steelers D/ST (Wk 1: @BUF) $1 7
28. (267) Jared Goff, DET $0 9 28. (77) Mike Davis, ATL $5 6 18. (42) DJ Moore, CAR $19 13 3. (171) Ravens D/ST (Wk 1: @LV) $1 8
29. (268) Jameis Winston, NO $0 6 29. (91) Raheem Mostert, SF $3 6 19. (44) Chris Godwin, TB $17 9 4. (172) 49ers D/ST (Wk 1: @DET) $1 6
30. (269) Cam Newton, NE $0 14 30. (92) James Robinson, JAC $3 7 20. (45) Kenny Golladay, NYG $17 10 5. (173) WFT D/ST (Wk 1: LAC) $1 9
31. (270) Sam Darnold, CAR $0 13 31. (100) Zack Moss, BUF $2 7 21. (46) Tyler Lockett, SEA $15 9 6. (174) Bills D/ST (Wk 1: PIT) $1 7
32. (296) Drew Lock, DEN $0 11 32. (101) Leonard Fournette, TB $2 9 22. (47) Diontae Johnson, PIT $15 7 7. (175) Broncos D/ST (Wk 1: @NYG) $1 11
33. (301) Tyrod Taylor, HOU $0 10 33. (102) Ronald Jones II, TB $2 9 23. (48) Courtland Sutton, DEN $14 11 8. (176) Rams D/ST (Wk 1: CHI) $1 11
34. (302) Mac Jones, NE $0 14 34. (103) David Johnson, HOU $2 10 24. (49) Brandon Aiyuk, SF $13 6 9. (177) Patriots D/ST (Wk 1: MIA) $1 14
35. (310) Taysom Hill, NO $0 6 35. (110) James Conner, ARI $2 12 25. (50) Cooper Kupp, LAR $13 11 10. (178) Browns D/ST (Wk 1: @KC) $1 13
36. (315) Jimmy Garoppolo, SF $0 6 36. (111) Melvin Gordon, DEN $2 11 26. (51) Odell Beckham Jr., CLE $12 13 11. (179) Colts D/ST (Wk 1: SEA) $0 14
37. (316) Jordan Love, GB $0 13 37. (112) Michael Carter, NYJ $2 6 27. (52) Ja'Marr Chase, CIN $11 10 12. (180) Saints D/ST (Wk 1: GB) $0 6
38. (317) Teddy Bridgewater, DEN $0 11 38. (113) Kenyan Drake, LV $2 8 28. (53) Tee Higgins, CIN $11 10 13. (221) Packers D/ST (Wk 1: @NO) $0 13
39. (318) Andy Dalton, CHI $0 10 39. (114) Trey Sermon, SF $2 6 29. (57) Chase Claypool, PIT $10 7 14. (222) Dolphins D/ST (Wk 1: @NE) $0 14
40. (319) Davis Mills, HOU $0 10 40. (123) AJ Dillon, GB $1 13 30. (58) Michael Thomas, NO $9 6 15. (253) Vikings D/ST (Wk 1: @CIN) $0 7
41. (124) Jamaal Williams, DET $1 9 31. (59) JuJu Smith-Schuster, PIT $9 7
42. (125) Devin Singletary, BUF $1 7 32. (60) Will Fuller V, MIA $9 14
1. (4) Travis Kelce, KC $58 12 43. (126) Nyheim Hines, IND $1 14 33. (66) Laviska Shenault Jr., JAC $7 7 1. (181) Harrison Butker, KC $1 12
2. (36) Darren Waller, LV $22 8 44. (127) Gus Edwards, BAL $1 8 34. (67) DJ Chark Jr., JAC $7 7 2. (182) Justin Tucker, BAL $1 8
3. (37) George Kittle, SF $22 6 45. (136) Latavius Murray, NO $1 6 35. (68) Robby Anderson, CAR $6 13 3. (183) Jason Myers, SEA $1 9
4. (54) Mark Andrews, BAL $10 8 46. (137) Alexander Mattison, MIN $1 7 36. (69) Jerry Jeudy, DEN $6 11 4. (184) Brandon McManus, DEN $1 11
5. (72) Kyle Pitts, ATL $6 6 47. (138) J.D. McKissic, WAS $1 9 37. (70) Brandin Cooks, HOU $6 10 5. (185) Jason Sanders, MIA $1 14
6. (73) T.J. Hockenson, DET $6 9 48. (139) James White, NE $1 14 38. (71) Michael Gallup, DAL $6 7 6. (186) Younghoe Koo, ATL $1 6
7. (81) Logan Thomas, WAS $4 9 49. (140) Tarik Cohen, CHI $1 10 39. (74) Curtis Samuel, WAS $5 9 7. (187) Matt Gay, LAR $1 11
8. (82) Dallas Goedert, PHI $4 14 50. (141) Tony Pollard, DAL $0 7 40. (83) Marquise Brown, BAL $4 8 8. (188) Graham Gano, NYG $1 10
9. (106) Noah Fant, DEN $2 11 51. (142) Giovani Bernard, TB $0 9 41. (84) Deebo Samuel, SF $4 6 9. (189) Greg Zuerlein, DAL $1 7
10. (107) Robert Tonyan, GB $2 13 52. (148) Tevin Coleman, NYJ $0 6 42. (85) DeVonta Smith, PHI $4 14 10. (190) Tyler Bass, BUF $1 7
11. (108) Mike Gesicki, MIA $2 14 53. (149) Phillip Lindsay, HOU $0 10 43. (86) Tyler Boyd, CIN $4 10 11. (191) Josh Lambo, JAC $0 7
12. (109) Jonnu Smith, NE $2 14 54. (150) Darrel Williams, KC $0 12 44. (87) Henry Ruggs III, LV $3 8 12. (192) Matt Prater, ARI $0 12
13. (119) Irv Smith Jr., MIN $2 7 55. (151) Darrynton Evans, TEN $0 13 45. (88) Jarvis Landry, CLE $3 13 13. (223) Daniel Carlson, LV $0 8
14. (120) Hunter Henry, NE $2 14 56. (159) Rashaad Penny, SEA $0 9 46. (93) Antonio Brown, TB $3 9 14. (224) Wil Lutz, NO $0 6
15. (121) Rob Gronkowski, TB $1 9 57. (160) Ty Johnson, NYJ $0 6 47. (94) Jaylen Waddle, MIA $3 14 15. (255) Nick Folk, NE $0 14
16. (122) Eric Ebron, PIT $1 7 58. (161) Devontae Booker, NYG $0 10 48. (95) Jalen Reagor, PHI $3 14
17. (143) Evan Engram, NYG $0 10 59. (162) Sony Michel, NE $0 14 49. (96) Corey Davis, NYJ $2 6
18. (144) Tyler Higbee, LAR $0 11 60. (199) Wayne Gallman, SF $0 6 50. (97) Marvin Jones Jr., JAC $2 7
19. (163) Austin Hooper, CLE $0 13 61. (200) Justin Jackson, LAC $0 7 51. (98) Mike Williams, LAC $2 7
20. (164) Adam Trautman, NO $0 6 62. (201) Salvon Ahmed, MIA $0 14 52. (99) Cole Beasley, BUF $2 7
21. (168) Jared Cook, LAC $0 7 63. (202) Chuba Hubbard, CAR $0 13 53. (116) T.Y. Hilton, IND $2 14
22. (211) Cole Kmet, CHI $0 10 64. (203) Malcolm Brown, MIA $0 14 54. (117) Mecole Hardman, KC $2 12
23. (246) Zach Ertz, PHI $0 14 65. (204) Marlon Mack, IND $0 14 55. (118) Michael Pittman Jr., IND $2 14
24. (247) Anthony Firkser, TEN $0 13 66. (205) Rhamondre Stevenson, NE $0 14 56. (130) Parris Campbell, IND $1 14
25. (248) Blake Jarwin, DAL $0 7 67. (206) Samaje Perine, CIN $0 10 57. (131) DeVante Parker, MIA $1 14 8
26. (249) O.J. Howard, TB $0 9 68. (207) Xavier Jones, LAR $0 11 58. (132) Darnell Mooney, CHI $1 10
27. (257) Gerald Everett, SEA $0 9 69. (208) Javian Hawkins, ATL $0 6 59. (133) Jakobi Meyers, NE $1 14
28. (258) Chris Herndon, NYJ $0 6 70. (209) Joshua Kelley, LAC $0 7 60. (134) Nelson Agholor, NE $1 14
29. (259) Jordan Akins, HOU $0 10 71. (210) DeeJay Dallas, SEA $0 9 61. (135) Elijah Moore, NYJ $1 6
30. (289) Dawson Knox, BUF $0 7 72. (235) Kerryon Johnson, PHI $0 14 62. (152) Russell Gage, ATL $0 6 11
31. (290) Jack Doyle, IND $0 14 73. (236) Benny Snell Jr., PIT $0 7 63. (153) Tre'Quan Smith, NO $0 6 12
32. (291) C.J. Uzomah, CIN $0 10 74. (237) Damien Williams, CHI $0 10 64. (154) Rashod Bateman, BAL $0 8
33. (292) Hayden Hurst, ATL $0 6 75. (238) Kenneth Gainwell, PHI $0 14 65. (155) Randall Cobb, GB $0 13
34. (293) Dan Arnold, CAR $0 13 76. (239) La'Mical Perine, NYJ $0 6 66. (156) Rondale Moore, ARI $0 12
35. (311) Dalton Schultz, DAL $0 7 77. (240) Mark Ingram II, HOU $0 10 67. (157) Jamison Crowder, NYJ $0 6`;

export const numero = /\d+\.\s/;

export const nonPpr = rawNonPpr.replace(/\n/g, "").split(numero);
