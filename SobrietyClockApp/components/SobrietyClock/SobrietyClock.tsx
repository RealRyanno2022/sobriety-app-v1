import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SobrietyClockProps {
  startDate: Date;
}

const SobrietyClock: React.FC<SobrietyClockProps> = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const diff = now.getTime() - new Date(startDate).getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <View style={styles.container}>
      <Text style={styles.clockText}>Time Sobriety: {timeElapsed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  clockText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SobrietyClock;
