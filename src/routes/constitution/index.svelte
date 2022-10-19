<script context="module">
	export const prerender = true;
</script>

<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneTwo, oneTwoThree, oneThree;
    let two, twoOne, twoTwo;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo;
    let seven, sevenOne;
    let eight, eightOne, eightTwo, eightThree;
    let nine, nineOne;
    let ten;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">DYNASTY RELEGATION LEAGUE CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: Roster</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Positional Breakdown</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Trading</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwoThree)}>1.2.3 Trade Deadline</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Waiver Wire</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Drafting</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Draft Order</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Rookie Drafts</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Scoring System</h3>  
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Voting on Scoring System</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Postseason</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Playoff Tiebreakers</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Relegation Details</h3>   
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Format</h4> 

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Tanking Policy</h3>
            <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 League Tanking Policy</h4>
            <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Expected Owner Conduct</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: Replacing Managers</h3>
            <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 Replacing Managers</h4>
        

    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Section 8: League Finances</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>8.1 League Dues</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightTwo)}>8.2 Payout</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightThree)}>8.3 League Dues Payment Links</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>Section 9: League Changes</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineOne)}>9.1 Changes Passed</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(ten)}>Section 10: Original Bylaws Link</h3>
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1 Roster Breakdown</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Positional Breakdown</h3>
    
    <p>28 Total Players</p>
    
    <p class="underscore">Starters</p>
    <ul>   
        <li>RB</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>SFLEX (QB/RB/WR/TE)</li>
    </ul>
    
    <p>13 Bench (Expanded by 5 between the keague draft and start of regular season)</p>

    <p>3 IR Spots (Player must be labeled as IR, Out, or Covid in the Sleeper App)</p>
    

    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Trading</h3>
    
    <p>Trades are allowed by any team in any league. Interleague Trading is allowed/encouraged. Trading of players and draft picks (up to 3 drafts away) are allowed. Unpaid years will require immediate payment into LeagueSafe or TeamStake for the team trading away the picks. Trades will process immediately and will be reversed if vetoed or under investigation for collusion. Tradable assets include players, draft picks, and FAAB $.</p>
    <p>No trades will be allowed for teams that are not paid in full for the season in advance.  This is to prevent trades being completed by owners that end up not paying and abandoning the team.  

        If an owner wishes to trade future draft picks, their team must be paid in full through the season of the pick(s) they wish to trade. If an owner is not paid in full through the season of the pick(s) they wish to trade, the owner shall submit payment prior to making the trade at the current buy-in rate for each season through the season of the traded pick.  If a trade is processed with picks from seasons beyond what the owner has currently paid, it will be reversed.
        
        All trades are final when accepted by both owners and have been executed on the league website. Off-season trading is allowed and encouraged. If an owner thinks a deal is potentially collusion; he has 48 hours to bring that to the attention of an acting commissioner. Commissioners will take a vote and make a decision regarding the validity of the trade. Owners are encouraged to post on the league message board in order to explain and discuss any recent trades.
        Owners from MAIN League may trade with owners from RELEGATION League. Keep this in mind when evaluating future picks. 
        No trades involving future picks that have not been paid within a 1 year time will be allowed. (For example: Allowed: Trading 2021 picks when 2020 is paid. NOT ALLOWED: Trading 2022 picks when 2021 is not paid).  
        When a season ends, teams will need to pay for the next season in advance to stay eligible for trading.  This will help us avoid trades being completed by owners that end up not paying and abandoning the team. </p>
        
    <h4 bind:this={oneTwoThree}>1.2.3 Trade Deadline</h4>
    <div class="subBlock">
        <p>The trade deadline will be set for week 13. The trade deadline will automatically apply after the MNF games conclude.</p>
    </div>
    
    
    
    <h3 bind:this={oneThree}>1.3 Waiver Wire</h3>
    
    <p>FAAB Waiver wire system. Each team will begin the season with $100. $0 bids are allowed. Bids will process Daily at 9AM EST.</p>

    <p>FAAB budgets will reset each season in January.</p>
    
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 Drafting</h2>
    
    <h3 bind:this={twoOne}>2.1 Draft Order</h3>
    <p>The draft order each year will be a linear draft in reverse order of the previous year’s regular season standings. Reverse order will be defined by Max PF for teams not in playoffs, and reverse standings for teams in the playoffs. For relegated teams, and promoted teams, their draft orders will be applied BEFORE they are relegated/demoted. (Teams #11/#12 demoted in the main league will have picks #13/#14 in the rookie drafts)</p>
    <p> Draft Order each year will be defined as follows: </p>

    <ul>
        <li><b>Relegation League Rookie Draft Order:</b></li>
        <li>1.24 - 1.19 - Reverse playoff finish of Main league</li>
        <li>1.18 - 1.15 - Max PF (higher max PF gets a higher rookie draft seed)</li>
        <li>1.14 - 1.13 - Max PF for Relegated teams ( higher max pf of the 2 teams gets higher seed)</li>
        <li>1.12 - 1.11 - Promoted Team Winners (Winner of the match gets the lower rookie pick 1.11. Loser of the match gets 1.12)</li>
        <li>1.10 - 1.07 - Reverse playoff finish</li>
        <li>1.06 - 1.01 - Low max PF for non playoff teams.</li>
    </ul>

    <h3 bind:this={twoTwo}>2.2 Rookie Drafts</h3>
    <p>Rookie drafts will consist of 3 round of drafting, with 8 hour timers. Taxi slots have increased to 3 to mimic the rookie rounds and will be in effect starting 2022 League Year.</p>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3 Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical .5PPR Scoring). The scoring system will never change without a majority league vote.</p>
    
    <ul>
        <li><b>Scoring:</b></li>
        <li>QB: 6 point Passing TD /  -2 Interception / -4 Pick 6 / -0.5 QB Sacked</li>
        <li>Receptions: 1.0 PPR</li>
        <li>TE Bonus: 0.5 Bonus for TE for 1.5 PPR for TE receptions</li>
        <li>Other settings are default scoring</li>
    </ul>
    <h2 class="sectionHeading" bind:this={four}>Section 4 Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season 6 teams will make the playoffs in each league. The first round of playoffs will commence in week 15. The teams with the best record will have the bye weeks.</p>
    <p><b><u> NOTE: MEDIAN SCORING TAKES INTO EFFECT STARTING 2021 SEASON FOR AN EXTRA GAME EACH WEEK</u></b></p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Points For</li>
        <li>Head 2 Head Record</li>
        <li>Total Points Against</li>
        <li>100yardrush tecmobowl 100-yard simulator</li>
        <li>Duel to the death</li>
    </ol>
    <h2 class="sectionHeading" bind:this={five}>Section 5 Relegation Details</h2>
    <h3 bind:this={fiveOne}>5.1 Format</h3>
    <p>This league is being setup to be a Relegation League. In a relegation league (similar to soccer/football leagues) the lowest tier teams in the main league, will be relegated to the Relegation League (League Name in progress). Once a team has been demoted to the relegation league, they can be promoted back to the main league each year if they qualify in the top 2 finish for the year in their league. The 2 last place finish teams in the main league each year will be relegated to the lesser league for the next year. In case of a tie H2H record will be applied, followed by PF.
        The main league ( Main League) will consist of the top 12 teams that finished after the year 1 startup year. The bottom 12 teams will make up the Relegation league starting in year 2, with the top 12 teams making up the Main League after year 1.
        Divisions will be created to keep everyone in the league startup together in the league. The divisions will be the placeholder for the Main league and Relegation League.</p>
        
        
    <h2 class="sectionHeading" bind:this={six}>Section 6 Tanking Policy</h2>
    
    <h3 bind:this={sixOne}>6.1 League Tanking Policy</h3>
    <p>Tanking (referring to intentionally setting a poor lineup in order to get a better draft position), can be subjective and inherently difficult to police, but like pornography, you know it when you see it. Starting lineups should be submitted as complete and in the best interest of that team. This is not just for that team's win/loss ratio, but for their opponent's and the overall parity of the league. Handing out easy wins in a pay league as competitive as this one, will not be allowed. If an owner is accused of not submitting its best lineup, an acting commissioner will make a ruling. If an owner is guilty of tanking, they will lose their draft position relative to the severity of the offense. Repeated offenses may lead to ejection from the league. Inactivity may be interpreted as tanking and dealt with in the same manner. This is different from teams "rebuilding" or trading away key assets for draft picks or players with potential. Please continue to set an optimal lineup even if your roster is missing an RB/WR1.</p>
    <h3 bind:this={sixTwo}>6.2 Expected Owner Conduct</h3>
    <p>All owners are expected to carry themselves in a respectful manner that would not harm other owners or the league in general. Bragging and “trash talk” is expected, but should be handled in an adult fashion. An acting commissioner will draw the line between comments made in good fun and inflammatory comments that could harm the good of the league. Violation of this could result in ejection from the league.  If you choose to leave the league or are ejected from the league by a majority vote (9 members), all league fees that have been paid will be forfeited.</p>
    <p>Since this is a dynasty league, all owners are expected to be active in some fashion year round. Owners should respond to all trade offers in a timely manner, even if it is just declining the offer. Nobody likes to be left with no reply, especially if another trade offer is awaiting a reply. This respect should be reciprocated to those receiving offers. If someone says "no", they are "busy", or "not interested in trading" at the time please respect those answers. If an owner is removed from the league for any violation of league rules or by his/her own choice, an acting commissioner will take charge of that team until a replacement owner is found and approved. The commissioner running the ghosted team will not perform any transactions on behalf of the abandoned team and the lineup will be entered based on optimal Sleeper projections.</p>


    <h2 class="sectionHeading" bind:this={seven}>Section 7 Replacing Managers</h2>
    
        
    <h3 bind:this={sevenOne}>7.1 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commissioners will try to find a suitable candidate with some connection to at least a portion of the existing managers. Priority will be placed on managers who are eager to take on a dynasty commitment and will be very active within the league.</p>

    <h2 class="sectionHeading" bind:this={eight}>Section 8 League Finances</h2>
    
    <h3 bind:this={eightOne}>8.1 League Dues</h3>
    <p>League dues are set at {dues}$. Dues are collected through LeagueSafe and TeamStake. Flexibility is to provide overseas owners the ability to pay in/withdraw winnings. All managers must be paid up by March 1 each year to be eligible for rookie drafts and not be replaced by a new owner. All traded picks for future seasons not paid will need to be paid immediately as well. </p>
    
    <h3 bind:this={eightTwo}>8.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    
    <p><b>MAIN LEAGUE PAYOUT:</b></p>
    <ul>
        <li>1st place: $290</li>
        <li>2nd place: $140</li>
        <li>3rd place: $50</li>
    </ul>
    
    <p><b>RELEGATION LEAGUE PAYOUT:</b></p>
    <ul>
        <li>1st place: $80</li>
        <li>2nd place: $40</li>
    </ul>
    
    <h3 bind:this={eightThree}>8.3 League Dues Payment Links</h3>
    <p>Leaguesafe links can be found:</p>

    <ul>
        <li><a href="https://leaguesafe.com/join/3936512">LeagueSafe 2021</a></li>
        <li><a href="https://www.leaguesafe.com/join/3936513">LeagueSafe 2022</a></li>
        <li><a href="https://www.leaguesafe.com/join/3972817">LeagueSafe 2023</a></li>
        <li>LeagueSafe 2024 - Use 2023 to make payment until 2024 leagues can be created. Money will be rolled over.</li>
    </ul>

    <p>TeamStake links can be found:</p>

    <ul>
        <li><a href="https://teamstake.com/league/league_detail/10/0/4117/insert">TeamStake 2021</a></li>
        <li><a href="https://teamstake.com/league/league_detail/10/0/4252/insert">TeamStake 2022</a></li>
        <li><a href="https://teamstake.com/league/league_detail/10/0/5935/insert">TeamStake 2023</a></li>
        <li>TeamStake 2024 - Use 2023 to make payment until 2024 leagues can be created. Money will be rolled over.</li>
    </ul>

    <h2 class="sectionHeading" bind:this={nine}>Section 9 League Changes</h2>
    <h3 bind:this={nineOne}>9.1 Changes Passed</h3>

    <ul>
        <li><b>2020 only</b></li>
        <li>Custom Scheduling where 6 games played vs top 12 teams, 6 games bottom 12 and a rivalry week matchup</li>
        <li>NBA Style Draft Lottery for rookie pick order</li>
        <li> 2 Additional IR slots (5 total) for COVID-19 potential </li>
    </ul>

    <ul>
        <li><b>2021+ Changes</b></li>
        <li>Extra game against League Median added</li>
        <li>2022 - Introduce additional Taxi slot to make 3 Taxi slots instead of 2.</li>
        <li>Allow all teams to enter a dispersal draft once every 3 years by filling out the Dispersal Draft Blind Request Form.</li>
    </ul>

    <h2 class="sectionHeading" bind:this={ten}>Section 10 Original Bylaws Link</h2>
<p> The original bylaws Google Doc can be found here: <a href="https://docs.google.com/document/d/1T0F2pq2djS68JvKUr5zuelQomGodMY-bdIhnH4tLtAo/edit?usp=sharing">Dynasty Relegation Bylaws</a>
</div>
