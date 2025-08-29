const TimelineChart = ({ items, EventCard, date }) => {
  const renderEventCard = ({ key, ...rest }) => {
    return <EventCard key={key} {...rest} />;
  };

  return (
    <View style={{ height: 580 }}>
      <Timetable
        items={items}
        renderItem={renderEventCard}
        date={date}
        fromHour={9}
        toHour={18}
        is12Hour={true}
        hourHeight={60}
        columnHorizontalPadding={10}
      />
    </View>
  );
};

export default TimelineChart;
import React from "react";
import { View } from "react-native";
import Timetable from "react-native-calendar-timetable";
