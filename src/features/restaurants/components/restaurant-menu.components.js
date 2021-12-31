import React, { useState } from 'react';
import { List } from 'react-native-paper';

export function Menu() {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <List.Section title="Menu">
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="coffee" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title="Pancakes" />
        <List.Item title="Waffles" />
      </List.Accordion>

      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="food" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      >
        <List.Item title="Burger and Fries" />
        <List.Item title="Noodles" />
      </List.Accordion>

      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="silverware-fork-knife" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <List.Item title="Beef Wellington" />
        <List.Item title="Scallops" />
      </List.Accordion>

      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      >
        <List.Item title="Martini" />
        <List.Item title="Old Fashioned" />
      </List.Accordion>
    </List.Section>
  );
}
