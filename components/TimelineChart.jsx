import React from "react";
import { View } from "react-native";
import Timetable from "react-native-calendar-timetable";

const TimelineChart = ({ items, EventCard, date }) => {
  const renderEventCard = ({ key, ...rest }) => {
    return <EventCard key={key} {...rest} />;
  };

  return (
    <View style={{ height: 925 }}>
      <Timetable
        items={items}
        renderItem={renderEventCard}
        date={date}
        fromHour={8}
        toHour={19}
        is12Hour={true}
        hourHeight={90}
        columnHorizontalPadding={10}
      />
    </View>
  );
};

export default TimelineChart;
