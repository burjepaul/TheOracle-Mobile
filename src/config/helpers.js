export const createStatisticsAllLeagusByCountry = (statistics, country) =>{
    //Sums all leagues from a specific country and creates a data template to match the others datas from DB 
    console.log(country)
    const allDataForCountry = statistics.filter((statisticEntry) => statisticEntry.country === country)
    const sum_total_games = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.total_games
    }, 0)

    const sum_total_win = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.total_win
    }, 0)

    const sum_total_lost = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.total_lost
    }, 0)

    const total_win_percentage = sum_total_win/sum_total_games * 100

    const total_games_final_result = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.total_games_final_result
    },0)

    const win_final_result = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.win_final_result
    },0)

    const lost_final_result = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.lost_final_result
    },0)

    const win_final_result_with_odd = allDataForCountry.reduce((acc, obj) => {
        if (obj.average_odd_win) return acc + obj.win_final_result
        else return acc
    },0)

    const lost_final_result_with_odd = allDataForCountry.reduce((acc, obj) => {
        if (obj.average_odd_lost) return acc + obj.lost_final_result
        else return acc
    },0)

    const average_odd_win = allDataForCountry.reduce((acc, obj) => {
        return acc + (obj.average_odd_win*obj.win_final_result)
    },0)/win_final_result_with_odd

    const average_odd_lost = allDataForCountry.reduce((acc, obj) => {
        return acc + (obj.average_odd_lost*obj.lost_final_result)
    },0)/lost_final_result_with_odd

    const win_percentage_final_result = win_final_result/total_games_final_result * 100

    const total_games_goals = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.total_games_goals
    },0)

    const win_goals = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.win_goals
    },0)

    const lost_goals = allDataForCountry.reduce((acc, obj) => {
        return acc + obj.lost_goals
    },0)

    const win_percentage_goals = win_goals/total_games_goals * 100

    const dataTemplate = {
        country: country,
        league: "All",
        total_games: sum_total_games,
        total_win: sum_total_win,
        total_lost: sum_total_lost,
        total_win_percentage: total_win_percentage,
        total_games_final_result: total_games_final_result,
        win_final_result: win_final_result,
        lost_final_result: lost_final_result,
        average_odd_win: average_odd_win,
        average_odd_lost: average_odd_lost,
        win_percentage_final_result: win_percentage_final_result,
        total_games_goals:total_games_goals,
        win_goals:win_goals,
        lost_goals:lost_goals,
        win_percentage_goals:win_percentage_goals
    }

    return dataTemplate
}

export const convertToUTC = (date, time) => {
    // Create a new Date object with the provided date and time
    const localDateTime = new Date(`${date}T${time}:00+03:00`);
    // Get the local date and time components
    const localYear = localDateTime.getFullYear();
    const localMonth = localDateTime.getMonth() + 1; // Months are zero-based, so we add 1
    const localDay = localDateTime.getDate();
    const localHour = localDateTime.getHours();
    const localMinute = localDateTime.getMinutes();

    // Format the local date and time
    const localDate = `${localYear}-${localMonth.toString().padStart(2, '0')}-${localDay.toString().padStart(2, '0')}`;
    const localTime = `${localHour.toString().padStart(2, '0')}:${localMinute.toString().padStart(2, '0')}`;
  
    // Return the formatted UTC date and time
    return [localDate, localTime];
}
