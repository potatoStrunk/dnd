# Changing Git User Configuration

## Current Configuration
- **Name**: Robert Strunk
- **Email**: 47643610+robertStrunk@users.noreply.github.com
- **Scope**: Global (applies to all repositories)

## Option 1: Change for This Repository Only (Recommended)

This changes the Git user only for this specific repository:

```powershell
cd "c:\Users\Rob\Projects\tinkering\luke site cursor"
git config user.name "Your New Name"
git config user.email "your-email@example.com"
```

**Example:**
```powershell
git config user.name "Luke"
git config user.email "luke@example.com"
```

## Option 2: Change Globally (All Repositories)

This changes the Git user for all repositories on your computer:

```powershell
git config --global user.name "Your New Name"
git config --global user.email "your-email@example.com"
```

## Verify Your Changes

Check what's configured:
```powershell
git config user.name
git config user.email
```

Check if it's local or global:
```powershell
git config --list --show-origin | Select-String "user"
```

## Important Notes

- **Local config** (Option 1) overrides global config for this repository
- The email should match the email associated with your GitHub account
- If you use GitHub's private email feature, use: `username@users.noreply.github.com`
- After changing, you may need to update your Git credentials in Windows Credential Manager

## Update Git Credentials (if needed)

If you need to change stored credentials:

1. Open Windows Credential Manager:
   - Press `Win + R`
   - Type `control /name Microsoft.CredentialManager`
   - Or search "Credential Manager" in Start menu

2. Go to "Windows Credentials"
3. Find entries starting with `git:https://github.com`
4. Remove or edit them
5. Next time you push, Git will prompt for new credentials

