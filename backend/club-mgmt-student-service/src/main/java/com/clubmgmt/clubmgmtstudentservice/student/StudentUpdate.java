package com.clubmgmt.clubmgmtstudentservice.student;

public class StudentUpdate {
    private String smuEmail;
    private String smuEmailNoFac;
    private String matricNum;
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

    public String getSmuEmail() {
        return smuEmail;
    }
    public void setSmuEmail(String smuEmail) {
        this.smuEmail = smuEmail;
    }
    public String getSmuEmailNoFac() {
        return smuEmailNoFac;
    }
    public void setSmuEmailNoFac(String smuEmailNoFac) {
        this.smuEmailNoFac = smuEmailNoFac;
    }
    public String getMatricNum() {
        return matricNum;
    }
    public void setMatricNum(String matricNum) {
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
}
