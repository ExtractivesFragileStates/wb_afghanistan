//   -- Afghanistan - Map Content --

// Map layer text -- how to access local html docs via ajax?
var intro = "<div class='dashboard'><ul class='majorStats'><li><div><span class='key'>GDP</span><sub style='left: 66px; top: 40px;'><em>per capita</em></sub> <span class='val'>$1,234</span></div></li><li><div><span class='key'>HDI</span> <span class='val'>0.374 (175<sup>th</sup>)</span></div></li></ul><ul class='wbStats'><li style='border:0'><div><span></span> <span class='val'></span></div></li><li><div><span class='key'>EITI Status</span> <span class='val' style='color: #f42; font-weight: bold;'>Candidate</span></div></li><li><div><span class='key'>Government Revenue</span> <span class='val'>$23.38mil</span></div></li><li><div><span class='key'>Company Payments</span> <span class='val'>$24.96mil</span></div></li></ul><ul class='eitiStats'><li style='border: 0'><div><span class='key title'>Worldwide Governance Indicators</span><sup style='left: 282px; top:8px;'>†</sup></div></li><li><div><span class='key'>Voice & Accountability</span><span class='val'>7.5 / 100</span></div></li><li><div><span class='key'>Political Stability</span> <span class='val'>1.4 / 100 </span></div></li><li><div><span class='key'>Government Effectiveness</span><span class='val'>5.2 / 100 </span></div></li><li><div><span class='key'>Regulatory Quality</span> <span class='val'>4.7 / 100</span></div></li><li><div><span class='key'>Rule of Law</span> <span class='val'>0.5 / 100</span></div></li><li><div><span class='key'>Control of Corruption</span> <span class='val'>1.4 / 100  </span></div></li></ul><p style='margin-top: 30px;'>More than three decades of war in <strong>Afghanistan</strong> have caused untold human suffering. Since 1978, nearly <strong>two million</strong> Afghan citizens have been killed, and <strong>a million</strong> orphaned or disabled by political instability and civil wars that have, at times, forced one third of the population to flee the country.</p><p>International forces have agreed to hand over full responsibility for the country’s security to the Afghan National Security Forces by the end of <strong>2014</strong>, a year that will also witness Presidential elections. Meanwhile Afghanistan is increasingly looking to its own resources to provide for its development.</p><p>Managed well, the country’s rich mineral and hydrocarbon resources offer the prospect of government revenue, jobs and economic development, permitting Afghanistan to become more financially self-sufficient. However, on-going <strong>instability</strong>, <strong>poor infrastructure</strong> and <strong>weak governance</strong> present the sector with daunting challenges.</p><h1>The Map</h1><p>Use the tabs above to view the data that explores the complex dynamics of extractive industries in Afghanistan: their <strong>developmental potential</strong>, and their linkages to <strong>conflict and fragility</strong>.</p><br><em><sup>†: <a href='http://info.worldbank.org/governance/wgi/index.asp' target='_blank'>The Worldwide Governance Indicators</a> are a collection of six indicators measuring levels of governance around the world, aggregating data from upwards of 40 different sources.  The project is developed and maintained by the World Bank</sup></em>";

var popDensityText = "<div id='popDensityText'><p>Afghanistan’s rate of population growth <strong>3.1%</strong> is one of the fastest in the world, exceeded only by Niger, South Sudan and Malawi. The population is very young, with a median age of <strong>16.6</strong> years and a life expectancy of just <strong>49</strong> years at birth. UNDP estimates that the country’s population, which was <strong>29.82</strong> million in 2012, will reach <strong>53.3</strong> million by 2030.</p><p>Although more than <strong>5.7</strong> million refugees have been voluntarily repatriated to Afghanistan over the last decade, an estimated <strong>2.7</strong> million refugees continue to live in exile in other countries, principally Iran and Pakistan.</p><h1>Population Density</h1><p>Afghanistan’s average population density is <strong>52.72</strong> people per square kilometre but large parts of the country are sparsely populated mountains and desert. Only <strong>2.1%</strong> of the country is covered by forest.</p><p>Nearly a quarter of all Afghans live in cities. Urbanization is accelerating: urban growth rates are estimated at <strong>4.4%</strong>. <strong>Kabul</strong>, with <strong>3.28</strong> million people, is by far the largest city, followed by <strong>Kandahar</strong>, <strong>Herat</strong>, <strong>Mazar-e-Sharif</strong> and <strong>Kunduz</strong>, each of which have a population of less than <strong>500,000</strong> people.</p></div>";

var ethnicityText = "<div id='ethnicityText'><h1>Ethnicity</h1><p>As a mountainous country on the frontiers of several major ethno-linguistic areas, Afghan society is highly diverse. The main ethno-linguistic groups are the Pashtun, Tajik, Hazara, Uzbek, Aimak, Turkmen, Baloch, Pashai, Nuristani, Gujjar, Arab, Brahui and Pamiri. However, these ethnic groups are not homogenous and there is plenty of overlap between different groups.</p><p>Ethnic violence has played a role in the wars in Afghanistan. The Northern Alliance side in the civil war from 1996 was made up mostly of Tajiks but also included Uzbeks, Hazara and Pashtuns. Meanwhile, the Taliban committed several massacres in the late 1990s, systematically targeting Hazaras, Tajiks and Uzbeks.</p></div>";

var unemploymentText = "<div id='employentText'><p>Thirty-five years of violence has left the country bearing a heavy legacy of social, environmental and economic damage. The poorest country in Asia, Afghanistan sits in the bottom <strong>10%</strong> of both the Human Development Index <strong>(HDI)</strong> and the World Bank’s global ranking of governance performance (<strong>the World Governance Index</strong>).</p><p>The country’s GDP in 2012 was <strong>US$19.9</strong> billion and economic growth was rapid: <strong>12.5%</strong> in 2012. However, these figures disguise serious structural problems. Currently Afghanistan imports roughly seventeen times more than it exports, leading to a deficit in the country’s balance of trade deficit of <strong>US$6</strong> billion in 2012.</p><p>Meanwhile, overseas development assistance as a percentage of Gross National Income (<strong>GNI</strong>) has climbed from <strong>16.67%</strong> in 2001 to <strong>42.38%</strong> in 2010. This makes Afghanistan one of the world’s most aid-dependent states. The World Bank estimates that in 2010/11 international spending on the ANSF and civilian aid together equalled <strong>97%</strong> of GDP.</p><h1>Employment</h1><p>Afghanistan is predominantly a rural economy based on smallholder farming. In 2009 an estimated <strong>78.6%</strong> of the labor force were employed in agriculture, <strong>5.7%</strong> in industry, and <strong>15.7%</strong> in services. Just <strong>14.5%</strong> of adult women, however, are in the labor force. The UN Office for Drugs and Crime (<strong>UNODC</strong>) estimates that as much as <strong>5%</strong> of the population is involved in the production of opium and hashish.</p><p>The unemployment rate in the country is <strong>15%</strong>. However, this figure hides much higher rates of under-employment that, in some areas, reach <strong>80%</strong> or <strong>90%</strong>. This ratchets up the pressure on the government to secure mining investment that can create jobs, even if industrial mining operations typically produce few jobs for the amount of capital invested.</p></div>";
	
var povertyText = "<div id='povertyText'><h1>Poverty</h1><p>Afghanistan is the poorest country in the world outside of sub-Saharan Africa. <strong>36%</strong> of the population fell below the national poverty line in 2008, while more than half is at risk of falling into poverty. As the map shows, income distribution, as expressed by the Gini co-efficient, varies considerably between provinces.</p><p>A 2010 report by the UN human rights commissioner argued the widespread corruption contributes to poverty noting, “the government is often unable to deliver basic services, such as security, food or shelter”.</p></div>";

var educationText = "<div id='educationText'><h1>Education</h1><p>Years of conflict have disrupted the schooling of millions of Afghans. In 2010 UNDP estimated that just <strong>5.8%</strong> of women and <strong>34%</strong> of men older than 25 years old had received any secondary schooling. Three quarters of the population is illiterate.</p><p>School enrolment figures have improved for the new generation. In 2011 primary school gross enrolment reached <strong>97%</strong>, <strong>46%</strong> in secondary school and <strong>3.3%</strong> in tertiary education. However, there is still a significant gender gap, with more boys than girls in primary education. There are high drop-out rates too: only <strong>45%</strong> of the <strong>2.4 million</strong> girls in primary education complete school.</p></div>"

var healthText = "<div id='healthText'><h1>Health</h1><p>A combination of the inaccessible terrain, harsh climate, cultural factors and limited government capacity results in limited health provision and troubling health statistics. Afghanistan has the world’s second highest rate of <strong>maternal mortality</strong>, the fourth highest rate of <strong>infant mortality</strong> and the 11th highest rate of <strong>child mortality</strong>. Nearly a third of children under the age of five are underweight and <strong>12 million</strong> people are undernourished.</p><p>Nevertheless there has been progress over the past decade: the child mortality rate fell by almost a quarter between 2006 and 2010, and the availability of improved water sources in rural areas rose from <strong>40%</strong> in 2007 to <strong>53%</strong> in 2011. Afghanistan is on track to meet its Millennium Development Goals (<strong>MDGs</strong>) targets on access to safe water and maternal mortality, but is likely to miss many of the other goals.</p></div>"

var mineralogyText = "<div id='mineralogyText'><p>Afghanistan contains rich underground resources valued at upwards of <strong>one trillion dollars</strong>. Developing the country’s mineral resources is a strategic priority of the Government of Afghanistan and the international community, who see the sector as an engine for growth and the best hope for Afghanistan to become financial independent over the medium term. The Ministry of Mines estimates that mineral extraction will provide between <strong>42%</strong> and <strong>45%</strong> of Afghanistan’s <strong>GDP</strong> by 2024.</p><p>Conflict, political instability and inadequate infrastructure mean that the minerals sector is relatively under-developed. However, in recent years, the country has seen increased interest from investors in exploration and possible extraction. Afghanistan became an Extractive Industries Transparency Initiative (<strong>EITI</strong>) candidate country in 2010.</p><p>However, the extractives sector in Afghanistan is a double-edged sword. On the one hand it can generate jobs, earn revenue for the government and pay for much-needed infrastructure. But on the other, the presence of rich mineral resources could be a ‘curse’ that breeds corruption and bad governance, stunts economic growth, causes new environmental and social problems, including more violent conflict.</p><h1>Mineralogy</h1><p>As a result of its complex geological history Afghanistan hosts a rich variety of subsurface resources, including precious and semi-precious <strong>gemstones</strong> (emeralds, rubies, sapphires and lapis lazuli), <strong>uranium</strong>, <strong>common metals</strong> (copper, lead, chromite and iron), <strong>rare-earth minerals</strong> (such as lithium and niobium) and <strong>precious metals</strong> such as gold and silver. It also holds potentially valuable reserves of <strong>fossil fuels</strong> in the form of gas, oil and coal.</p></div>";
	
var mineralizedAreasText = "<div id='mineralizedAreasText'><h1>Mineralized Areas</h1><p>Although mining has been taking place in Afghanistan for over six thousand years, only <strong>ten per cent</strong> of the country has been assessed by detailed geological surveys and much of its potential remains unexplored. A June 2010 survey by the US Geological Survey estimated the value of the country’s resources at <strong>one trillion dollars</strong>. Other estimates have suggested the staggeringly high figure of three trillion dollars.</p><p>The government has made the development of the sector a strategic priority. As of September 2013, the government had already signed <strong>221</strong> mining contracts. Two major contracts have attracted particular attention. The first is an agreement signed with a Chinese state-owned company to develop the country’s largest copper deposit in a place called <strong>Aynak</strong>, 30 kilometers to the south of Kabul. The second is for an iron ore mine at <strong>Hajigak</strong>, on the border between Bamyan and Wardak provinces to the west of Kabul.</p></div>";


var securityText = "<div id='securityText'><p>Afghanistan has experienced almost constant instability and violence since 1978. A generation has grown up within Afghanistan not knowing peace, and a generation of Afghan refugees have grown up not knowing their own country.</p><p>Years of war have devastated the social and physical infrastructure of Afghanistan, up-ended traditional systems of resource management, disrupted the education of generations of Afghans, and impoverished the country.</p><p>War has also eroded ethnic and community relations and left communities more vulnerable to natural disasters like floods and drought. One series of floods in the northeast of the country in 2009 killed nearly <strong>1,200</strong> people.</p><h1>Security</h1> <p>Despite 10 years of initiatives following the 2001 invasion, which led to the removal of the Taliban government, the security situation in the country remains grave. Large parts of the country are inaccessible to government representatives and aid workers, even with elaborate security precautions. In 2012 Afghanistan was judged as the most dangerous place in the world for aid workers.</p><p>2012 was the first year that civilian casualties fell since the UN started collecting data in 2006. However, the same year also saw an increased of <strong>68%</strong> in targeted killings, assassinations designed to strike at decision makers in the current political and security structure.</p><p>Insecurity has encouraged the expansion of opium and heroin production, which has in turn fuelled further insecurity. In 2013 opium production increased for the third year in a row, expanding in <strong>12</strong> of the country’s <strong>34</strong> provinces and decreasing in only one.</p></div>";

var conflictText = "<p>Since the end of the Second Congo War in '03, the DRC continues to experience chronic instability around the country.  This conflict density map layer aggregates violent incidents captured by the <strong>ACLED</strong> database taking place between '08 and '10.  Violence is concentrated in the eastern <span class='navigate' data-location='-2.641,25.549,7'>Kivu provinces</span>, where local militias and rebel groups fund their activities in part through the black market trade in <strong>Conflict Minerals</strong>.  Conflict density is also high in the <span class='navigate' data-location='3.431,25.604,7'>north east Oriental Province</span>, where the Lords Resistance Army (<strong>LRA</strong>), led by Joseph Kony, continues to terrorize local populations.</p><h1>Land Rights</h1><p>Ethnic tensions over land rights, inflamed by the country's two successive civil wars, are a major flash point for violence, often resulting in a cycle reprisals and the creation of ethnic-based civilian militias.  The situation is further aggrevated by conflicts between customary and official land claims, which given the weakness of both customary and state structures, often results in corrupt practices and inter-communal violence.  Mediation between small landholders with competing claims has had some successes in resolving these confrontations, however comprehensive landreform remains as a massive undertaking.</p><h1>M23</h1><p>In early spring, '12, nearly 300 soldiers recently integrated into the Congolese Army (<strong>FARDC</strong>) rebelled against the government, calling their movement <strong>M23</strong>.  Active mainly in <span class='navigate' data-location='-0.972,26.043,7'>North Kivu province</span>, the group grew over the subsequent year, and in Fall '12 succeeded in capturing the eastern boarder city of Goma.  In March '13, Bosco Ntaganda, the leader of <strong>M23</strong> who was wanted by the ICC for alleged war crimes, surrendered to the US Embacy in Kigali, likely due to infighting in the group.  Since then, the group's power has declined, though instability in the east remains endemic.</p>";

var idpText = "<div id='idpText'><h1>IDPs</h1><p>On-going insecurity has increased internal displacement and complicated the return of the <strong>2.7</strong> million Afghan refugees still living outside the country’s borders. As of mid-2012 <strong>UNHCR</strong> estimated that there were <strong>425,000</strong> internally displaced Afghans, and noted that the rate of internal displacement has increased over the past three years.</p></div>"



// Build base layer, where id:[['map_id',z-index],...]
// Set background layers w/ low z-index and label layers w/ high z-index
var baseLayer = {
	latlon:	[34, 64],
	zoom: 6,
	id: [
		['helsinki.afg_base_layer',-1000],
		['helsinki.afghanistan_labels',1000]
		],
	text: intro
}

// Build map objects, accessed via each button's html id attribute.  
//would it be better/faster to build these via a custom object constructor?
var mapLayers = {
	unemployment:{
		id: 'helsinki.afg_unemployment',
		text: unemploymentText,
		legend: document.getElementById('unemploymentLegend').innerHTML
	},
	poverty:{
		id: 'helsinki.afg_poverty',
		text: povertyText,
		legend: document.getElementById('povertyLegend').innerHTML
	},
	education:{
		id: 'helsinki.afg_edu',
		text: educationText,
		legend: document.getElementById('educationLegend').innerHTML
	},
	watsan:{
		id: 'helsinki.afg_watsan',
		text: healthText,
		legend: document.getElementById('healthLegend').innerHTML
	},
// 	resourceCorridor:{
// 		id: 'helsinki.afghanistan_labels',
// 		text: artisanalMinesText,
// 		legend: '<div> ... coming soon </div>'
// 	},
	mineralogy:{
		id: 'helsinki.afghanistan_hyperspectal_a',
		text: mineralogyText,
		legend: document.getElementById('hyMapLegend').innerHTML
	},
	aoi:{
		id: 'helsinki.afg_area_of_interest',
		text: mineralizedAreasText,
		legend: document.getElementById('aoiLegend').innerHTML
	},
	acled:{
		id: 'helsinki.afghanistan_acled',
		text: securityText,
		legend: document.getElementById('acledLegend').innerHTML
	},
	idps_displaced_12:{
		id: 'helsinki.afghanistan_idp_12_displacement',
		text: idpText,
		legend: document.getElementById('idpLegend').innerHTML
	},
	idps_origin_12:{
		id: 'helsinki.afghanistan_idp_12_origin',
		text: idpText,
		legend: document.getElementById('idpLegend').innerHTML
	},
	ethno:{
		id: 'helsinki.afghanistan_ethnicity',
		text: ethnicityText,
		legend: document.getElementById('ethnoLegend').innerHTML
	},
	population:{
		id: 'helsinki.seadc_gpw',
		text: popDensityText,
		legend: document.getElementById('populationLegend').innerHTML
	}
}

var checkboxButtons = [
	{
		mapId: 'helsinki.afg_mineral_concessions',
		elementId: 'checkboxMineConcessions',
		zIndex: 998
	}
]