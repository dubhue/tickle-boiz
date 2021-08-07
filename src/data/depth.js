import get from "lodash/get";

const rawDepth = `
QB1 Josh Allen (56) QB1 Tua Tagovailoa (145) QB1 Zach Wilson (245) QB1 Cam Newton (268) QB1 Dak Prescott (67) QB1 Jalen Hurts (115) QB1 Daniel Jones (165) QB1 Ryan Fitzpatrick (212)
QB2 Mitchell Trubisky (337) QB2 Jacoby Brissett (336) QB2 - QB2 Mac Jones (310) QB2 - QB2 - QB2 - QB2 Taylor Heinicke (340)
RB1 Zack Moss (100) RB1 Myles Gaskin (43) RB1 Michael Carter (112) RB1 Damien Harris (91) RB1 Ezekiel Elliott (7) RB1 Miles Sanders (28) RB1 Saquon Barkley (3) RB1 Antonio Gibson (15)
RB2 Devin Singletary (126) RB2 Salvon Ahmed (201) RB2 Tevin Coleman (149) RB2 James White (136) RB2 Tony Pollard (140) RB2 Kerryon Johnson (235) RB2 Devontae Booker (161) RB2 J.D. McKissic (127)
RB3 - RB3 Malcolm Brown (203) RB3 Ty Johnson (160) RB3 Sony Michel (162) RB3 - RB3 Kenneth Gainwell (238) RB3 - RB3 Peyton Barber (303)
WR1 Stefon Diggs (12) WR1 Will Fuller V (66) WR1 Corey Davis (95) WR1 Jakobi Meyers (132) WR1 CeeDee Lamb (32) WR1 DeVonta Smith (86) WR1 Kenny Golladay (49) WR1 Terry McLaurin (26)
WR2 Cole Beasley (97) WR2 Jaylen Waddle (93) WR2 Elijah Moore (131) WR2 Nelson Agholor (133) WR2 Amari Cooper (35) WR2 Jalen Reagor (96) WR2 Sterling Shepard (194) WR2 Curtis Samuel (75)
WR3 Gabriel Davis (197) WR3 DeVante Parker (118) WR3 Jamison Crowder (152) WR3 - WR3 Michael Gallup (84) WR3 - WR3 Kadarius Toney (198) WR3 Dyami Brown (261)
WR4 Emmanuel Sanders (214) WR4 - WR4 Denzel Mims (218) WR4 - WR4 - WR4 - WR4 Darius Slayton (231) WR4 Adam Humphries (262)
TE1 Dawson Knox (291) TE1 Mike Gesicki (108) TE1 Chris Herndon (259) TE1 Jonnu Smith (109) TE1 Blake Jarwin (248) TE1 Dallas Goedert (83) TE1 Evan Engram (121) TE1 Logan Thomas (82)
TE2 Jacob Hollister (330) TE2 - TE2 - TE2 Hunter Henry (120) TE2 Dalton Schultz (311) TE2 Zach Ertz (246) TE2 Kyle Rudolph (325) TE2 -
K Tyler Bass (190) K Jason Sanders (185) K Chris Naggar (352) K Nick Folk (255) K Greg Zuerlein (189) K Jake Elliott (356) K Graham Gano (188) K Dustin Hopkins (345)
QB1 Joe Burrow (128) QB1 Baker Mayfield (166) QB1 Lamar Jackson (68) QB1 Ben Roethlisberger (147) QB1 Justin Fields (219) QB1 Jared Goff (266) QB1 Aaron Rodgers (79) QB1 Kirk Cousins (167)
QB2 - QB2 - QB2 Trace McSorley (344) QB2 Mason Rudolph (343) QB2 Andy Dalton (317) QB2 - QB2 Jordan Love (339) QB2 -
RB1 Joe Mixon (18) RB1 Nick Chubb (14) RB1 J.K. Dobbins (29) RB1 Najee Harris (16) RB1 David Montgomery (23) RB1 D'Andre Swift (22) RB1 Aaron Jones (11) RB1 Dalvin Cook (2)
RB2 Samaje Perine (206) RB2 Kareem Hunt (64) RB2 Gus Edwards (138) RB2 Benny Snell Jr. (236) RB2 Tarik Cohen (148) RB2 Jamaal Williams (113) RB2 AJ Dillon (114) RB2 Alexander Mattison (139)
RB3 Trayveon Williams (280) RB3 D'Ernest Johnson (282) RB3 Justice Hill (309) RB3 Jaylen Samuels (321) RB3 Damien Williams (237) RB3 Jermar Jefferson (322) RB3 - RB3 Ameer Abdullah (279)
WR1 Ja'Marr Chase (50) WR1 Odell Beckham Jr. (53) WR1 Marquise Brown (87) WR1 Diontae Johnson (45) WR1 Allen Robinson II (31) WR1 Breshad Perriman (158) WR1 Davante Adams (9) WR1 Justin Jefferson (25)
WR2 Tee Higgins (52) WR2 Jarvis Landry (88) WR2 Rashod Bateman (155) WR2 JuJu Smith-Schuster (57) WR2 Darnell Mooney (130) WR2 Tyrell Williams (193) WR2 Randall Cobb (156) WR2 Adam Thielen (40)
WR3 Tyler Boyd (72) WR3 - WR3 Sammy Watkins (295) WR3 Chase Claypool (60) WR3 - WR3 Amon-Ra St. Brown (215) WR3 Allen Lazard (227) WR3 -
WR4 - WR4 - WR4 - WR4 James Washington (284) WR4 - WR4 Quintez Cephus (260) WR4 Marquez Valdes-Scantling (228) WR4 -
TE1 C.J. Uzomah (290) TE1 Austin Hooper (163) TE1 Mark Andrews (54) TE1 Eric Ebron (144) TE1 Cole Kmet (168) TE1 T.J. Hockenson (73) TE1 Robert Tonyan (107) TE1 Irv Smith Jr. (119)
TE2 - TE2 David Njoku (326) TE2 - TE2 Pat Freiermuth (328) TE2 Jimmy Graham (324) TE2 - TE2 - TE2 Tyler Conklin (314)
K Evan McPherson (347) K Cody Parkey (256) K Justin Tucker (182) K Chris Boswell (354) K Cairo Santos (353) K Randy Bullock (348) K Mason Crosby (351) K Greg Joseph (355)
QB1 Carson Wentz (296) QB1 Trevor Lawrence (129) QB1 Deshaun Watson (220) QB1 Ryan Tannehill (104) QB1 Tom Brady (90) QB1 Matt Ryan (146) QB1 Sam Darnold (269) QB1 Jameis Winston (267)
QB2 Jacob Eason (318) QB2 Gardner Minshew II (338) QB2 Tyrod Taylor (302) QB2 - QB2 Kyle Trask (341) QB2 - QB2 Phillip Walker (342) QB2 Taysom Hill (301)
RB1 Jonathan Taylor (13) RB1 Travis Etienne (63) RB1 David Johnson (102) RB1 Derrick Henry (6) RB1 Leonard Fournette (101) RB1 Mike Davis (77) RB1 Christian McCaffrey (1) RB1 Alvin Kamara (5)
RB2 Nyheim Hines (124) RB2 James Robinson (78) RB2 Phillip Lindsay (142) RB2 Darrynton Evans (151) RB2 Ronald Jones II (123) RB2 Javian Hawkins (208) RB2 Chuba Hubbard (202) RB2 Latavius Murray (137)
RB3 Marlon Mack (204) RB3 Carlos Hyde (264) RB3 Mark Ingram II (240) RB3 Brian Hill (276) RB3 Giovani Bernard (141) RB3 Qadree Ollison (241) RB3 - RB3 Ty Montgomery (281)
WR1 T.Y. Hilton (116) WR1 Laviska Shenault Jr. (65) WR1 Brandin Cooks (69) WR1 A.J. Brown (24) WR1 Mike Evans (34) WR1 Calvin Ridley (20) WR1 DJ Moore (42) WR1 Michael Thomas (58)
WR2 Michael Pittman Jr. (134) WR2 DJ Chark Jr. (70) WR2 Nico Collins (217) WR2 Julio Jones (41) WR2 Chris Godwin (44) WR2 Russell Gage (153) WR2 Robby Anderson (59) WR2 Tre'Quan Smith (154)
WR3 Parris Campbell (135) WR3 Marvin Jones Jr. (98) WR3 Chris Conley (251) WR3 - WR3 Antonio Brown (89) WR3 Olamide Zaccheaus (273) WR3 Terrace Marshall Jr. (213) WR3 Deonte Harris (272)
WR4 - WR4 - WR4 Anthony Miller (275) WR4 - WR4 - WR4 - WR4 - WR4 -
TE1 Jack Doyle (289) TE1 James O'Shaughnessy (329) TE1 Jordan Akins (258) TE1 Anthony Firkser (211) TE1 Rob Gronkowski (122) TE1 Kyle Pitts (74) TE1 Dan Arnold (293) TE1 Adam Trautman (164)
TE2 Mo Alie-Cox (313) TE2 - TE2 - TE2 - TE2 O.J. Howard (257) TE2 Hayden Hurst (292) TE2 - TE2 -
K Rodrigo Blankenship (346) K Josh Lambo (191) K Ka'imi Fairbairn (350) K Sam Ficken (358) K Ryan Succop (287) K Younghoe Koo (186) K Joey Slye (349) K Wil Lutz (224)
QB1 Drew Lock (270) QB1 Justin Herbert (81) QB1 Patrick Mahomes (55) QB1 Derek Carr (244) QB1 Trey Lance (243) QB1 Kyler Murray (61) QB1 Matthew Stafford (105) QB1 Russell Wilson (80)
QB2 Teddy Bridgewater (316) QB2 - QB2 - QB2 Marcus Mariota (335) QB2 Jimmy Garoppolo (315) QB2 - QB2 - QB2 -
RB1 Javonte Williams (76) RB1 Austin Ekeler (8) RB1 Clyde Edwards-Helaire (19) RB1 Josh Jacobs (38) RB1 Raheem Mostert (92) RB1 Chase Edmonds (62) RB1 Darrell Henderson Jr. (39) RB1 Chris Carson (30)
RB2 Melvin Gordon (111) RB2 Justin Jackson (200) RB2 Darrel Williams (150) RB2 Kenyan Drake (103) RB2 Trey Sermon (125) RB2 James Conner (110) RB2 Xavier Jones (207) RB2 Rashaad Penny (159)
RB3 - RB3 Joshua Kelley (209) RB3 Jerick McKinnon (306) RB3 Jalen Richard (320) RB3 Wayne Gallman (199) RB3 Eno Benjamin (283) RB3 Jake Funk (265) RB3 DeeJay Dallas (210)
WR1 Courtland Sutton (51) WR1 Keenan Allen (27) WR1 Tyreek Hill (10) WR1 Henry Ruggs III (94) WR1 Brandon Aiyuk (48) WR1 DeAndre Hopkins (17) WR1 Robert Woods (33) WR1 DK Metcalf (21)
WR2 Jerry Jeudy (71) WR2 Mike Williams (99) WR2 Mecole Hardman (117) WR2 John Brown (196) WR2 Deebo Samuel (85) WR2 Rondale Moore (157) WR2 Cooper Kupp (47) WR2 Tyler Lockett (46)
WR3 KJ Hamler (225) WR3 Josh Palmer (234) WR3 Demarcus Robinson (229) WR3 - WR3 - WR3 A.J. Green (195) WR3 Van Jefferson (232) WR3 D'Wayne Eskridge (216)
WR4 Tim Patrick (263) WR4 - WR4 Byron Pringle (230) WR4 - WR4 - WR4 Christian Kirk (226) WR4 Tutu Atwell (233) WR4 -
TE1 Noah Fant (106) TE1 Jared Cook (247) TE1 Travis Kelce (4) TE1 Darren Waller (36) TE1 George Kittle (37) TE1 Maxx Williams (331) TE1 Tyler Higbee (143) TE1 Gerald Everett (249)
TE2 Albert Okwuegbunam (332) TE2 Donald Parham (312) TE2 - TE2 Foster Moreau (334) TE2 - TE2 - TE2 Brycen Hopkins (333) TE2 Will Dissly (323)
K Brandon McManus (184) K Michael Badgley (357) K Harrison Butker (181) K Daniel Carlson (223) K Robbie Gould (288) K Matt Prater (192) K Matt Gay (187) K Jason Myers (183)`;
console.log(rawDepth.replace(/\n/g, "").split(")"));
export const depth = rawDepth
  .replace(/\n/g, "")
  .replace(/RB3 - /g, "")
  .replace(/QB2 - /g, "")
  .replace(/WR3 - /g, "")
  .replace(/WR4 - /g, "")
  .replace(/TE2 - /g, "")
  .replace(/-RB1/g, "RB1")
  .replace(/-K/g, "K")
  .replace(/-TE/g, "TE")
  .split(")")
  .reduce((valid, str) => {
    const split = str.split("(");
    const depthRank = split[1];
    const split2 = split[0].trim().split(" ");
    const depth = split2[0];
    const name = split2.slice(1, split2.length).join(" ");
    const depthPos =
      depth === "K" ? 1 : parseInt(get(depth.match(/[0-9]$/), `[0]`));
    const pos = depth === "K" ? "K" : depth.slice(0, depth.length - 1);
    if (name !== "") {
      valid.push({ depth, depthRank, name, depthPos, pos });
    }

    return valid;
  }, []);
console.log(depth);
