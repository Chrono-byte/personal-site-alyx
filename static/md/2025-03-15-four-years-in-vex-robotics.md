---
title: "Four Years in VEX Robotics: Programming and Designing Competition Robots"
tags: ["robotics", "vex", "cpp", "competition", "teamwork"]
date: "2025-03-15"
summary: "My journey through four years of VEX Robotics competition, from learning C++ programming to leading as a programmer and designer, culminating in qualifying for the Indiana State Championship."
---

## Four Years in VEX Robotics

My journey in robotics began in high school with **VEX Robotics Competition**,
where I spent four transformative years learning about mechanical design,
software engineering, and teamwork. As both a programmer and designer, I
contributed to building competition-ready robots that competed at regional and
state levels.

## Getting Started

Joining the robotics team in 2019 was my first exposure to programming beyond
simple scripts. VEX Robotics uses **C++** with the PROS kernel, providing a
real-time operating system for robot control.

### First Steps in Robotics Programming

The learning curve was steep but rewarding:

```cpp
// Basic motor control example
void opcontrol() {
  while (true) {
    // Tank drive control
    int left = master.get_analog(ANALOG_LEFT_Y);
    int right = master.get_analog(ANALOG_RIGHT_Y);

    left_mtr.move(left);
    right_mtr.move(right);

    pros::delay(20); // 50Hz control loop
  }
}
```

## Technical Skills Development

### Programming Evolution

Over four years, I progressed from basic motor control to complex autonomous
routines:

- **PID Controllers** for precise movement
- **Sensor Integration** (encoders, IMU, vision sensors)
- **State Machines** for autonomous behavior
- **Multi-threaded Programming** for concurrent tasks

### Mechanical Design Contributions

Beyond programming, I contributed to robot design:

- **Drivetrain Optimization** for speed and torque balance
- **Intake Mechanisms** for game piece manipulation
- **Scoring Systems** for efficient point collection
- **Structural Integrity** considerations

## Competition Experience

### Regional Competitions

Participating in regional events taught me about:

- **Rapid Prototyping** under time constraints
- **On-site Debugging** and problem-solving
- **Strategy Adaptation** based on opponent performance
- **Team Coordination** during matches

### State Championship Qualification

The highlight of my robotics career was qualifying for the **Indiana State
Championship** in 2023. This achievement required:

- **Consistent Performance** across multiple tournaments
- **Technical Excellence** in robot design and programming
- **Team Synergy** and collaborative problem-solving
- **Resilience** through technical failures and setbacks

## Key Projects and Innovations

### Autonomous Routines

Developing reliable autonomous programs was particularly challenging:

```cpp
void autonomous() {
  // Precise movement sequence
  drivePID(24, 100);  // Drive 24 inches at 100% speed
  turnPID(90, 80);    // Turn 90 degrees at 80% speed
  intake.move(127);   // Start intake mechanism

  // Complex scoring sequence
  scoreHighGoal();
  backupAndAlign();
}
```

### Sensor Integration

Incorporating multiple sensors for enhanced robot intelligence:

- **Optical Sensors** for line following
- **Distance Sensors** for obstacle avoidance
- **Vision Sensors** for object recognition
- **Inertial Measurement Units** for precise turning

## Team Dynamics and Leadership

### Roles and Responsibilities

As the team grew, I took on leadership roles:

- **Mentoring New Members** in programming fundamentals
- **Code Review** and quality assurance
- **Documentation** of systems and procedures
- **Strategy Planning** for competition approaches

### Collaborative Development

Working in a team environment taught me:

- **Version Control** with Git for code management
- **Code Standards** and best practices
- **Communication** between programmers and designers
- **Project Management** for robot development cycles

## Technical Challenges Overcome

### Real-Time Constraints

Programming for real-time systems required:

- **Deterministic Execution** within timing constraints
- **Resource Management** in memory-constrained environments
- **Interrupt Handling** for sensor inputs
- **Thread Safety** in multi-threaded applications

### Hardware-Software Integration

Bridging the gap between mechanical design and software:

- **Motor Characterization** for performance modeling
- **Feedback Control Systems** for stability
- **Calibration Procedures** for consistent behavior
- **Failure Mode Analysis** for reliability

## Skills Gained

The VEX Robotics experience developed my abilities in:

- **C++ Programming** in embedded systems
- **Systems Engineering** principles
- **Problem-Solving** under pressure
- **Team Collaboration** and leadership
- **Project Management** and time constraints

## Lasting Impact

Four years in VEX Robotics shaped my approach to:

- **Engineering Design** with user-centered thinking
- **Iterative Development** and rapid prototyping
- **Cross-Disciplinary Collaboration** between hardware and software
- **Competitive Excellence** and performance optimization

The experience continues to influence my work in software development, reminding
me of the importance of hardware constraints, real-time requirements, and
collaborative problem-solving.

You can find our team's code and documentation on
[GitHub](https://github.com/7701F) and competition results on
[RobotEvents](https://www.robotevents.com/teams/VRC/7701F).
