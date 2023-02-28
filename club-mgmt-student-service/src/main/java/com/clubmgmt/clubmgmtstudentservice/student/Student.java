package com.clubmgmt.clubmgmtstudentservice.student;

public class Student {
    //Default class for student
    private String id;
    private String smuEmail;
    private int matricNum;
    private String matriculatedName;
    private String gender;
    private String degree;
    private String intakeYear;
    private String telegramUser;
    private int phoneNum;
    private boolean vaccinationStatus;

    
    public Student(){
        // Null Constructor
    }

    private Student(StudentBuilder builder){
        super();
        // String smuEmail, int matricNumber, String matriculatedName
        this.smuEmail = builder.smuEmail;
        this.matricNum = builder.matricNumber;
        this.matriculatedName = builder.matriculatedName;
        this.gender = builder.gender;
        this.degree = builder.degree;
        this.intakeYear = builder.intakeYear;
        this.telegramUser = builder.telegramUser;
        this.phoneNum = builder.phoneNum;
        this.vaccinationStatus = builder.vaccinationStatus;
        this.medicalHistory = builder.medicalHistory;
        this.bloodType = builder.bloodType;
        this.nokName = builder.nokName;
        this.nokRelationship = builder.nokRelationship;
        this.nokNumber = builder.nokNumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSmuEmail() {
        return smuEmail;
    }

    public void setSmuEmail(String smuEmail) {
        this.smuEmail = smuEmail;
    }

    public int getMatricNum() {
        return matricNum;
    }

    public void setMatricNum(int matricNum) {
        this.matricNum = matricNum;
    }

    public String getMatriculatedName() {
        return matriculatedName;
    }

    public void setMatriculatedName(String matriculatedName) {
        this.matriculatedName = matriculatedName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getIntakeYear() {
        return intakeYear;
    }

    public void setIntakeYear(String intakeYear) {
        this.intakeYear = intakeYear;
    }

    public String getTelegramUser() {
        return telegramUser;
    }

    public void setTelegramUser(String telegramUser) {
        this.telegramUser = telegramUser;
    }

    public int getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(int phoneNum) {
        this.phoneNum = phoneNum;
    }

    public boolean isVaccinationStatus() {
        return vaccinationStatus;
    }

    public void setVaccinationStatus(boolean vaccinationStatus) {
        this.vaccinationStatus = vaccinationStatus;
    }

    public String getMedicalHistory() {
        return medicalHistory;
    }

    public void setMedicalHistory(String medicalHistory) {
        this.medicalHistory = medicalHistory;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getNokName() {
        return nokName;
    }

    public void setNokName(String nokName) {
        this.nokName = nokName;
    }

    public String getNokRelationship() {
        return nokRelationship;
    }

    public void setNokRelationship(String nokRelationship) {
        this.nokRelationship = nokRelationship;
    }

    public int getNokNumber() {
        return nokNumber;
    }

    public void setNokNumber(int nokNumber) {
        this.nokNumber = nokNumber;
    }

    private String medicalHistory;
    private String bloodType;
    private String nokName;
    private String nokRelationship;
    private int nokNumber;


    // Following builder pattern
    public static class StudentBuilder{
        private String id;
        private String smuEmail;
        private int matricNumber;
        private String matriculatedName;
        private String gender;
        private String degree;
        private String intakeYear;
        private String telegramUser;
        private int phoneNum;
        private boolean vaccinationStatus;
        private String medicalHistory;
        private String bloodType;
        private String nokName;
        private String nokRelationship;
        private int nokNumber;

        public StudentBuilder(int matricNumber,String smuEmail,String matriculatedName){
            //Base constructor without ID
            this.smuEmail = smuEmail;
            this.matricNumber = matricNumber;
            this.matriculatedName = matriculatedName;
        }

        public StudentBuilder setAdditionalInfo(String gender, String degree, String intakeYear){
            this.gender = gender;
            this.degree = degree;
            this.intakeYear = intakeYear;
            return this;
        }

        public StudentBuilder setHealthInfo(String bloodtype, String medicalHistory, boolean vaccinationStatus){
            this.bloodType = bloodtype;
            this.medicalHistory = medicalHistory;
            this.vaccinationStatus = vaccinationStatus;
            return this;
        }

        public StudentBuilder setTelegramUser(String telegramUser){
            this.telegramUser = telegramUser;
            return this;
        };
        
        public StudentBuilder setPhoneNo(int phoneNum){
            this.phoneNum = phoneNum;
            return this;
        };

        public StudentBuilder setNok(String nokName,String nokRelationship, int nokNumber){
            this.nokName = nokName;
            this.nokRelationship = nokRelationship;
            this.nokNumber = nokNumber;
            return this;
        }

        public Student build(){
            return new Student(this);
        }
    }
}



