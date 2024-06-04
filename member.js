function skillsMember() {
    // Get the id of the current member
    const id = getMemberId();
    // Get the member skills
    const skills = getMemberSkills(id);
    // Return the skills
    return skills;
}